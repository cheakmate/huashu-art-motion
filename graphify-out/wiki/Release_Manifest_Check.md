# Release Manifest Check

> 9 nodes

## Key Concepts

- **check_release.py** (16 connections) — `scripts/check_release.py`
- **git()** (7 connections) — `scripts/check_release.py`
- **inspect()** (7 connections) — `scripts/check_release.py`
- **main()** (6 connections) — `scripts/check_release.py`
- **check()** (5 connections) — `scripts/check_release.py`
- **build_manifest()** (4 connections) — `scripts/check_release.py`
- **tree()** (4 connections) — `scripts/check_release.py`
- **forbidden()** (2 connections) — `scripts/check_release.py`
- **增量发布检查：扫描Git实际待发对象，核最终文件清单；不推送。** (1 connections) — `scripts/check_release.py`

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (10 shared connections)
- [Config & Capabilities](Config_&_Capabilities.md) (3 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (1 shared connections)

## Source Files

- `scripts/check_release.py`

## Audit Trail

- EXTRACTED: 33 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*