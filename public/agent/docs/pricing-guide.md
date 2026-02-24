# Pricing Guide

How to price agent-facing content using HTTP 402.

## The 402 Flow

1. Agent requests a resource
2. Server responds with `402 Payment Required`
3. Response headers include: price, currency, payment address, supported protocols
4. Agent evaluates price against task value
5. Agent pays via supported protocol
6. Server returns content + cryptographic receipt

## Pricing Models

### Per-Request
Best for: individual document access, API calls, search queries.
Range: $0.0005 – $0.01 per request.

### Subscription
Best for: high-volume consumers, recurring access patterns.
Structure: Monthly fee for rate-limited access.

### Tiered
Best for: publishers with mixed content value.
Structure: Free tier for discovery, paid tier for full content.

## Pricing Principles

- Price should reflect value to the agent, not cost to serve
- Sub-cent pricing is viable — agents make thousands of requests
- Free discovery tier increases paid conversion
- Transparent pricing metadata in `/agent/pricing.json`

## Protocol Support

Autonomica is protocol-agnostic. The pricing spec supports:
- x402 (USDC on Base)
- Lightning Network
- Stripe
- Any future 402 implementation
