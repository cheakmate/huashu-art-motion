# Voice Training CLI

> 23 nodes

## Key Concepts

- **koubo.py** (35 connections) — `scripts/koubo.py`
- **cmd_say()** (8 connections) — `scripts/koubo.py`
- **cmd_train()** (8 connections) — `scripts/koubo.py`
- **main()** (8 connections) — `scripts/koubo.py`
- **api()** (6 connections) — `scripts/koubo.py`
- **cmd_voices()** (4 connections) — `scripts/koubo.py`
- **ffprobe_duration()** (4 connections) — `scripts/koubo.py`
- **fit_duration()** (4 connections) — `scripts/koubo.py`
- **load_env()** (4 connections) — `scripts/koubo.py`
- **match_loudness()** (4 connections) — `scripts/koubo.py`
- **mean_volume()** (4 connections) — `scripts/koubo.py`
- **registry_load()** (4 connections) — `scripts/koubo.py`
- **resolve_speaker()** (4 connections) — `scripts/koubo.py`
- **prepare_audio()** (3 connections) — `scripts/koubo.py`
- **_session()** (3 connections) — `scripts/koubo.py`
- **synthesize()** (3 connections) — `scripts/koubo.py`
- **configure_backend()** (2 connections) — `scripts/koubo.py`
- **registry_save()** (2 connections) — `scripts/koubo.py`
- **用 atempo 把音频精调到目标时长。超过 ±10% 不做，避免音质劣化。** (1 connections) — `scripts/koubo.py`
- **把合成音量拉到跟原音轨同一水平，避免拼接处音量跳变。** (1 connections) — `scripts/koubo.py`
- **口播 —— 用复刻音色生成、修补视频里的口播片段。 底层是火山引擎豆包声音复刻 2.0（seed-icl-2.0）。 say…** (1 connections) — `scripts/koubo.py`
- **转成 24k 单声道；优先 wav，超 10MB 自动降级到 mp3。返回临时文件路径。** (1 connections) — `scripts/koubo.py`
- **支持传音色名（登记表里的）或直接传 speaker_id。不传则用默认音色。** (1 connections) — `scripts/koubo.py`

## Relationships

- [Config & Capabilities](Config_&_Capabilities.md) (14 shared connections)
- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (6 shared connections)
- [Clip Layout Audit](Clip_Layout_Audit.md) (1 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (1 shared connections)
- [Clip Theme Tests](Clip_Theme_Tests.md) (1 shared connections)

## Source Files

- `scripts/koubo.py`

## Audit Trail

- EXTRACTED: 66 (96%)
- INFERRED: 3 (4%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*