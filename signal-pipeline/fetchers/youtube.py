"""
YouTube fetcher: RSS feed parsing + transcript extraction.
"""

import json
import os
import re
from datetime import datetime

import feedparser
from youtube_transcript_api import YouTubeTranscriptApi

from config import YOUTUBE_RSS_URL, YOUTUBE_SOURCES, RELEVANCE_KEYWORDS, PROCESSED_VIDEOS_FILE


def extract_urls(text):
    """Extract all URLs from text."""
    url_pattern = r'https?://[^\s<>")\]\']+'
    urls = re.findall(url_pattern, text)
    return [url.rstrip(".,;:") for url in urls]


def load_processed_videos():
    """Load set of previously processed video IDs."""
    if os.path.exists(PROCESSED_VIDEOS_FILE):
        with open(PROCESSED_VIDEOS_FILE, "r") as f:
            return set(json.load(f))
    return set()


def save_processed_videos(video_ids):
    """Save set of processed video IDs."""
    with open(PROCESSED_VIDEOS_FILE, "w") as f:
        json.dump(sorted(video_ids), f, indent=2)


def fetch_rss(channel_id):
    """Fetch and parse YouTube RSS feed for a channel."""
    url = YOUTUBE_RSS_URL.format(channel_id=channel_id)
    feed = feedparser.parse(url)

    if feed.bozo and not feed.entries:
        print(f"  [ERROR] Failed to parse RSS for {channel_id}: {feed.bozo_exception}")
        return []

    entries = []
    for entry in feed.entries:
        video_id = entry.get("yt_videoid", "")
        if not video_id:
            # Try extracting from link
            link = entry.get("link", "")
            if "v=" in link:
                video_id = link.split("v=")[-1].split("&")[0]

        # Try to extract video duration
        duration_seconds = None
        for media in entry.get("media_content", []):
            if media.get("duration"):
                try:
                    duration_seconds = int(media["duration"])
                except (ValueError, TypeError):
                    pass

        entries.append({
            "video_id": video_id,
            "title": entry.get("title", ""),
            "link": entry.get("link", ""),
            "published": entry.get("published", ""),
            "description": entry.get("media_description", entry.get("summary", "")),
            "author": entry.get("author", ""),
            "duration_seconds": duration_seconds,
        })

    return entries


def fetch_transcript(video_id):
    """Fetch auto-generated transcript for a video. Returns None on failure."""
    try:
        api = YouTubeTranscriptApi()
        result = api.fetch(video_id)
        full_text = " ".join([snippet.text for snippet in result])
        return full_text
    except Exception as e:
        print(f"  [SKIP] No transcript for {video_id}: {e}")
        return None


def score_relevance(title, description, transcript_preview):
    """Score content against keyword relevance matrix.

    Matches against title + description + first 500 words of transcript.
    Returns sum of keyword weights.
    """
    text = f"{title} {description} {transcript_preview}".lower()
    score = 0
    matched = []
    for keyword, weight in RELEVANCE_KEYWORDS.items():
        if keyword.lower() in text:
            score += weight
            matched.append((keyword, weight))
    return score, matched


def assemble_raw_content(title, creator, published, video_url, description, transcript):
    """Assemble raw content string for Gemini analysis."""
    return f"""Title: {title}
Creator: {creator}
Published: {published}
URL: {video_url}
Description: {description}

--- TRANSCRIPT ---

{transcript}
"""


def fetch_channel(source, processed_ids, limit=None):
    """Fetch new videos from a single YouTube channel.

    Args:
        source: Source config dict from YOUTUBE_SOURCES
        processed_ids: Set of already-processed video IDs
        limit: Max videos to process (None = all new)

    Returns:
        List of dicts with video data and raw_content
    """
    handle = source["handle"]
    channel_id = source["channel_id"]
    creator = source["creator"]
    source_name = source["source_name"]

    print(f"\n{'='*60}")
    print(f"Fetching: {source_name} ({handle})")
    print(f"{'='*60}")

    # Step 1: Fetch RSS
    entries = fetch_rss(channel_id)
    print(f"  Found {len(entries)} videos in RSS feed")

    # Step 2: Filter to new videos
    new_entries = [e for e in entries if e["video_id"] not in processed_ids]
    print(f"  New videos: {len(new_entries)}")

    if limit:
        new_entries = new_entries[:limit]
        print(f"  Limited to: {limit}")

    results = []
    for entry in new_entries:
        video_id = entry["video_id"]
        title = entry["title"]
        video_url = entry["link"]
        published = entry["published"]
        description = entry["description"]

        print(f"\n  Processing: {title}")
        print(f"  Video ID: {video_id}")
        print(f"  URL: {video_url}")

        # Step 3: Pull transcript
        transcript = fetch_transcript(video_id)
        if transcript is None:
            print(f"  [SKIP] Skipping video — no transcript available")
            continue

        transcript_words = transcript.split()
        print(f"  Transcript: {len(transcript_words)} words")

        # Step 4: Score relevance
        preview = " ".join(transcript_words[:500])
        relevance_score, matched_keywords = score_relevance(title, description, preview)
        print(f"  Relevance score: {relevance_score}")
        if matched_keywords:
            print(f"  Matched: {', '.join(f'{k}({w})' for k, w in matched_keywords)}")

        # Step 5: Assemble raw content
        raw_content = assemble_raw_content(
            title=title,
            creator=creator,
            published=published,
            video_url=video_url,
            description=description,
            transcript=transcript,
        )

        # Extract URLs from description
        description_urls = extract_urls(description)

        results.append({
            "video_id": video_id,
            "title": title,
            "video_url": video_url,
            "published": published,
            "description": description,
            "description_urls": description_urls,
            "creator": creator,
            "source_name": source_name,
            "source_type": "youtube",
            "source_tier": source["tier"],
            "transcript_available": True,
            "transcript_word_count": len(transcript_words),
            "relevance_score": relevance_score,
            "matched_keywords": matched_keywords,
            "raw_content": raw_content,
            "default_tags": source["default_tags"],
            "duration_seconds": entry.get("duration_seconds"),
        })

    return results


def fetch_all_channels(limit_per_channel=None):
    """Fetch new videos from all configured YouTube channels.

    Args:
        limit_per_channel: Max videos per channel (None = all new)

    Returns:
        List of all video results across channels
    """
    processed_ids = load_processed_videos()
    print(f"Previously processed: {len(processed_ids)} videos")

    all_results = []
    for source in YOUTUBE_SOURCES:
        results = fetch_channel(source, processed_ids, limit=limit_per_channel)
        all_results.extend(results)

        # Track processed IDs
        for r in results:
            processed_ids.add(r["video_id"])

    # Save updated tracking
    save_processed_videos(processed_ids)
    print(f"\nTotal new videos processed: {len(all_results)}")

    return all_results
