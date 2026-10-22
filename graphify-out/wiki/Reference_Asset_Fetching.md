# Reference Asset Fetching

> 16 nodes

## Key Concepts

- **fetch_reference.py** (16 connections) — `scripts/analyze/fetch_reference.py`
- **spec_assets.py** (9 connections) — `scripts/engine/spec_assets.py`
- **main()** (7 connections) — `scripts/analyze/fetch_reference.py`
- **localize()** (5 connections) — `scripts/engine/spec_assets.py`
- **urllib_parse** (5 connections)
- **api()** (4 connections) — `scripts/analyze/fetch_reference.py`
- **get()** (4 connections) — `scripts/analyze/fetch_reference.py`
- **search()** (3 connections) — `scripts/analyze/fetch_reference.py`
- **_file()** (3 connections) — `scripts/engine/spec_assets.py`
- **_url()** (3 connections) — `scripts/engine/spec_assets.py`
- **ahash()** (2 connections) — `scripts/analyze/fetch_reference.py`
- **palette()** (2 connections) — `scripts/analyze/fetch_reference.py`
- **_dir_frames()** (2 connections) — `scripts/engine/spec_assets.py`
- **原作锚定：从维基共享资源按关键词拉公版原作，存本地，并抽主色板、出接触表。…** (1 connections) — `scripts/analyze/fetch_reference.py`
- **片段 spec 里的本地素材路径：找出来、核存在、改写成本地服务能取的 URL。render.py 用它（qa.py 可以照搬）。 认这些字段（路径相对…** (1 connections) — `scripts/engine/spec_assets.py`
- **原地改写 spec。base = spec 所在目录；allowed 收集允许服务的绝对路径。** (1 connections) — `scripts/engine/spec_assets.py`

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (8 shared connections)
- [Clip Layout Audit](Clip_Layout_Audit.md) (6 shared connections)
- [Config & Capabilities](Config_&_Capabilities.md) (2 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (2 shared connections)

## Source Files

- `scripts/analyze/fetch_reference.py`
- `scripts/engine/spec_assets.py`

## Audit Trail

- EXTRACTED: 43 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*