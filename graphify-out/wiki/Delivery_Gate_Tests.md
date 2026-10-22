# Delivery Gate Tests

> 19 nodes

## Key Concepts

- **run()** (9 connections) — `tests/test_film_gate.py`
- **FilmGateTests** (7 connections) — `tests/test_film_gate.py`
- **gate()** (6 connections) — `tests/test_film_gate.py`
- **DeliverTests** (5 connections) — `tests/test_film_gate.py`
- **QaCameraEventTests** (5 connections) — `tests/test_film_gate.py`
- **.deliver()** (5 connections) — `tests/test_film_gate.py`
- **.test_green_copies_and_writes_facts()** (3 connections) — `tests/test_film_gate.py`
- **.test_red_does_not_copy()** (2 connections) — `tests/test_film_gate.py`
- **.test_review_files_and_qa_are_listed()** (2 connections) — `tests/test_film_gate.py`
- **.test_punch_is_green()** (2 connections) — `tests/test_film_gate.py`
- **.test_slow_push_is_red()** (2 connections) — `tests/test_film_gate.py`
- **.test_smooth_push_is_not_red()** (2 connections) — `tests/test_film_gate.py`
- **.test_text_report_names_worst_window_and_fix()** (2 connections) — `tests/test_film_gate.py`
- **.test_unreadable_file_exits_1()** (2 connections) — `tests/test_film_gate.py`
- **.setUpClass()** (2 connections) — `tests/test_film_gate.py`
- **.test_short_clip_only_warns()** (1 connections) — `tests/test_film_gate.py`
- **.test_pulse_push_is_camera_event_not_spike()** (1 connections) — `tests/test_film_gate.py`
- **.test_single_frame_flash_is_still_spike()** (1 connections) — `tests/test_film_gate.py`
- **整片模式下段内中位数≈0，一次 0.3 秒快推以前会被整串记成跳变；现在记成一个镜头事件。闪一下白仍是跳变。** (1 connections) — `tests/test_film_gate.py`

## Relationships

- [Clip Theme Tests](Clip_Theme_Tests.md) (6 shared connections)
- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (2 shared connections)

## Source Files

- `tests/test_film_gate.py`

## Audit Trail

- EXTRACTED: 34 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*