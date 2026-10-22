# Clip Layout Audit

> 50 nodes

## Key Concepts

- **qa.py** (26 connections) — `scripts/qa.py`
- **engine/render.py** (19 connections) — `scripts/engine/render.py`
- **test_local_server.py** (15 connections) — `tests/test_local_server.py`
- **rick_morty/render.py** (14 connections) — `scripts/engine/reference_films/rick_morty/render.py`
- **audit_clip.py** (4 connections) — `scripts/engine/audit_clip.py`
- **functools** (4 connections)
- **http_server** (4 connections)
- **socketserver** (4 connections)
- **threading** (4 connections)
- **Q** (3 connections) — `scripts/engine/render.py`
- **Q** (3 connections) — `scripts/qa.py`
- **frame_issues()** (3 connections) — `scripts/qa.py`
- **.test_idle_connection_does_not_block_parallel_assets_or_shutdown()** (3 connections) — `tests/test_local_server.py`
- **base64** (3 connections)
- **playwright_sync_api** (3 connections)
- **Q** (2 connections) — `scripts/engine/reference_films/rick_morty/render.py`
- **LocalServerTests** (2 connections) — `tests/test_local_server.py`
- **camera_events()** (2 connections) — `scripts/qa.py`
- **merge_runs()** (2 connections) — `scripts/qa.py`
- **near_blank()** (2 connections) — `scripts/qa.py`
- **persistent()** (2 connections) — `scripts/qa.py`
- **urllib_request** (2 connections)
- **Srv** (1 connections) — `scripts/engine/reference_films/rick_morty/render.py`
- **LocalServer** (1 connections) — `scripts/engine/render.py`
- **LocalServer** (1 connections) — `scripts/qa.py`
- *... and 25 more nodes in this community*

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (17 shared connections)
- [Reference Asset Fetching](Reference_Asset_Fetching.md) (6 shared connections)
- [Config & Capabilities](Config_&_Capabilities.md) (4 shared connections)
- [Clip Theme Tests](Clip_Theme_Tests.md) (2 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (1 shared connections)
- [Audio Synthesis Tools](Audio_Synthesis_Tools.md) (1 shared connections)
- [Voice Training CLI](Voice_Training_CLI.md) (1 shared connections)

## Source Files

- `scripts/engine/audit_clip.py`
- `scripts/engine/reference_films/rick_morty/render.py`
- `scripts/engine/render.py`
- `scripts/qa.py`
- `tests/test_local_server.py`

## Audit Trail

- EXTRACTED: 91 (98%)
- INFERRED: 2 (2%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*