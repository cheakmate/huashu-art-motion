# Delivery Script

> 13 nodes

## Key Concepts

- **deliver.py** (20 connections) — `scripts/deliver.py`
- **main()** (12 connections) — `scripts/deliver.py`
- **qa_facts()** (5 connections) — `scripts/deliver.py`
- **probe()** (4 connections) — `scripts/deliver.py`
- **facts_block()** (3 connections) — `scripts/deliver.py`
- **sha256()** (3 connections) — `scripts/deliver.py`
- **verify()** (3 connections) — `scripts/deliver.py`
- **write_doc()** (3 connections) — `scripts/deliver.py`
- **report_lines()** (3 connections) — `scripts/film_gate.py`
- **review_facts()** (2 connections) — `scripts/deliver.py`
- **stamp()** (2 connections) — `scripts/deliver.py`
- **deliver.py —— 一条命令交付：量门禁 → 红灯不出片；绿灯、黄灯复制成片并写交付说明，说明里的事实由脚本写。 uv run deliver.py…** (1 connections) — `scripts/deliver.py`
- **读 qa.py 的输出。返回事实行（列表）。** (1 connections) — `scripts/deliver.py`

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (12 shared connections)
- [Config & Capabilities](Config_&_Capabilities.md) (4 shared connections)
- [Audio Synthesis Tools](Audio_Synthesis_Tools.md) (3 shared connections)
- [Clip Theme Tests](Clip_Theme_Tests.md) (2 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (1 shared connections)

## Source Files

- `scripts/deliver.py`
- `scripts/film_gate.py`

## Audit Trail

- EXTRACTED: 42 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*