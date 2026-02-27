"""
Signal pipeline orchestrator.
Phase 1: Fetch YouTube videos, pull transcripts, print raw_content.
Phase 2: Fetch + 7-pass Gemini analysis.
"""

import sys
import os
import json
from datetime import datetime

# Fix Windows console encoding
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

# Ensure signal-pipeline is on the path when run from this directory
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fetchers.youtube import fetch_all_channels, fetch_channel, load_processed_videos
from config import YOUTUBE_SOURCES


def run_phase1(limit_per_channel=1):
    """Phase 1: Fetch only, no Gemini.

    Fetches RSS feeds, pulls transcripts, prints raw_content.
    Default: 1 video per channel for testing.
    """
    print("=" * 60)
    print("AUTONOMICA SIGNAL PIPELINE — Phase 1 (Fetch Only)")
    print("=" * 60)
    print(f"Sources: {len(YOUTUBE_SOURCES)} YouTube channels")
    print(f"Limit: {limit_per_channel} video(s) per channel")

    results = fetch_all_channels(limit_per_channel=limit_per_channel)

    # Print results
    print("\n" + "=" * 60)
    print(f"RESULTS: {len(results)} videos fetched")
    print("=" * 60)

    for i, result in enumerate(results, 1):
        print(f"\n{'─' * 60}")
        print(f"VIDEO {i}/{len(results)}")
        print(f"{'─' * 60}")
        print(f"Title:    {result['title']}")
        print(f"Creator:  {result['creator']} ({result['source_name']})")
        print(f"URL:      {result['video_url']}")
        print(f"Published: {result['published']}")
        print(f"Words:    {result['transcript_word_count']}")
        print(f"Relevance: {result['relevance_score']}")
        if result['matched_keywords']:
            print(f"Keywords: {', '.join(f'{k}({w})' for k, w in result['matched_keywords'])}")

        # Print first 200 words of raw_content as preview
        words = result['raw_content'].split()
        preview = " ".join(words[:200])
        print(f"\n--- RAW CONTENT PREVIEW (first 200 words) ---\n")
        print(preview)
        if len(words) > 200:
            print(f"\n... [{len(words) - 200} more words]")

    return results


def run_phase2(limit_per_channel=1):
    """Phase 2: Fetch + 7-pass Gemini analysis.

    Fetches videos, runs Gemini analysis, prints structured output.
    Writes results to output/ directory as JSON.
    """
    from analysis.gemini import analyze_signal

    print("=" * 60)
    print("AUTONOMICA SIGNAL PIPELINE — Phase 2 (Fetch + Gemini)")
    print("=" * 60)
    print(f"Sources: {len(YOUTUBE_SOURCES)} YouTube channels")
    print(f"Limit: {limit_per_channel} video(s) per channel")

    # Step 1: Fetch
    results = fetch_all_channels(limit_per_channel=limit_per_channel)

    if not results:
        print("\nNo new videos to process.")
        return []

    # Step 2: Analyze each video
    analyzed = []
    for i, result in enumerate(results, 1):
        print(f"\n{'─' * 60}")
        print(f"ANALYZING {i}/{len(results)}: {result['title']}")
        print(f"{'─' * 60}")

        analysis = analyze_signal(result["raw_content"], source_type="youtube")

        if analysis is None:
            print(f"  [SKIP] Analysis failed for: {result['title']}")
            continue

        # Post-processing: fix word_count (Gemini hallucinates this)
        if analysis.get("source_metadata_parsed"):
            analysis["source_metadata_parsed"]["word_count"] = result["transcript_word_count"]

        # Post-processing: merge description URLs with Gemini's source_links
        if analysis.get("source_metadata_parsed"):
            description_urls = result.get("description_urls", [])
            gemini_urls = analysis["source_metadata_parsed"].get("source_links", [])
            # Deduplicate, description URLs first
            all_urls = list(dict.fromkeys(description_urls + gemini_urls))
            analysis["source_metadata_parsed"]["source_links"] = all_urls

        # Merge fetch data + analysis
        signal = {
            # Source info
            "video_id": result["video_id"],
            "title": result["title"],
            "video_url": result["video_url"],
            "published": result["published"],
            "description": result["description"],
            "description_urls": result.get("description_urls", []),
            "creator": result["creator"],
            "source_name": result["source_name"],
            "source_type": result["source_type"],
            "source_tier": result["source_tier"],
            "default_tags": result["default_tags"],
            "duration_seconds": result.get("duration_seconds"),
            # Transcript info
            "transcript_available": result["transcript_available"],
            "transcript_word_count": result["transcript_word_count"],
            "relevance_score": result["relevance_score"],
            "matched_keywords": result["matched_keywords"],
            # 7-pass analysis
            "summary": analysis.get("summary"),
            "stood_out": analysis.get("stood_out"),
            "quotables": analysis.get("quotables"),
            "criticism": analysis.get("criticism"),
            "expansion": analysis.get("expansion"),
            "signal_json": analysis.get("signal_json"),
            "signal_json_parsed": analysis.get("signal_json_parsed"),
            "source_metadata": analysis.get("source_metadata"),
            "source_metadata_parsed": analysis.get("source_metadata_parsed"),
            "raw_response": analysis.get("raw_response"),
            "token_usage": analysis.get("token_usage", {}),
            # Flags
            "truncated": analysis.get("truncated", False),
            "finish_reason": analysis.get("finish_reason"),
            "missing_passes": analysis.get("missing_passes", []),
            # Meta
            "processed_at": datetime.utcnow().isoformat(),
        }

        analyzed.append(signal)

        # Print analysis summary
        print(f"\n  PASS 1 — SUMMARIZE:")
        print(f"  {signal['summary'][:300] if signal['summary'] else 'N/A'}...")
        print(f"\n  PASS 4 — CRITICIZE:")
        print(f"  {signal['criticism'][:300] if signal['criticism'] else 'N/A'}...")
        print(f"\n  PASS 6 — SIGNAL JSON:")
        if signal.get("signal_json_parsed"):
            sj = signal["signal_json_parsed"]
            print(f"  Headline: {sj.get('headline', 'N/A')}")
            print(f"  Slug: {sj.get('slug', 'N/A')}")
            print(f"  Tags: {sj.get('tags', [])}")
            print(f"  Route: {sj.get('route_suggestion', 'N/A')} — {sj.get('route_rationale', '')}")
        else:
            print(f"  [WARN] JSON parsing failed")
        if signal.get("token_usage"):
            tu = signal["token_usage"]
            print(f"\n  Cost: ${tu.get('estimated_cost_usd', 0):.6f} ({tu.get('prompt_tokens', 0):,} in / {tu.get('output_tokens', 0):,} out)")

        # Write individual JSON file
        output_dir = os.path.join(os.path.dirname(__file__), "output")
        os.makedirs(output_dir, exist_ok=True)

        # Use slug from signal_json if available, otherwise video_id
        if signal.get("signal_json_parsed") and signal["signal_json_parsed"].get("slug"):
            filename = f"{signal['signal_json_parsed']['slug']}.json"
        else:
            filename = f"{result['video_id']}.json"

        filepath = os.path.join(output_dir, filename)
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(signal, f, indent=2, ensure_ascii=False)
        print(f"\n  Written to: output/{filename}")

    # Summary
    print(f"\n{'=' * 60}")
    print(f"PHASE 2 COMPLETE: {len(analyzed)}/{len(results)} videos analyzed")
    print("=" * 60)

    return analyzed


def reset_tracking():
    """Clear the processed videos tracking file."""
    from config import PROCESSED_VIDEOS_FILE
    if os.path.exists(PROCESSED_VIDEOS_FILE):
        os.remove(PROCESSED_VIDEOS_FILE)
        print("Tracking file cleared.")
    else:
        print("No tracking file to clear.")


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--reset":
        reset_tracking()
    elif len(sys.argv) > 1 and sys.argv[1] == "--phase2":
        limit = int(sys.argv[2]) if len(sys.argv) > 2 else 1
        run_phase2(limit_per_channel=limit)
    elif len(sys.argv) > 1 and sys.argv[1] == "--all":
        run_phase1(limit_per_channel=None)
    else:
        limit = int(sys.argv[1]) if len(sys.argv) > 1 else 1
        run_phase1(limit_per_channel=limit)
