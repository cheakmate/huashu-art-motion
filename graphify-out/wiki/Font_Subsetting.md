# Font Subsetting

> 11 nodes

## Key Concepts

- **font_subset.py** (12 connections) — `scripts/font_subset.py`
- **scan()** (5 connections) — `scripts/font_subset.py`
- **fix_blank_widths()** (3 connections) — `scripts/font_subset.py`
- **gb2312_l1()** (3 connections) — `scripts/font_subset.py`
- **cjk()** (2 connections) — `scripts/font_subset.py`
- **GB2312 全部 6763 个汉字（一级 3755 常用字＋二级 3008 次常用字，如「渲」「浏」）** (1 connections) — `scripts/font_subset.py`
- **从一个中文字体里抽子集，写成 woff 放进 engine/lib/fonts/。缺字形会静默回退系统字体（换台机器就变样），…** (1 connections) — `scripts/font_subset.py`
- **只收 JS 字符串字面量里的中文（注释里的中文不会画到画面上，算进来子集会胖 20 倍）** (1 connections) — `scripts/font_subset.py`
- **全角空格 U+3000 在阿里巴巴普惠体 3.0 的 Medium／Bold 源字体里字宽是 0（Heavy／Black 正常 984/990），…** (1 connections) — `scripts/font_subset.py`
- **fonttools** (1 connections)
- **fonttools_ttlib** (1 connections)

## Relationships

- [Animation Breakdown Tooling](Animation_Breakdown_Tooling.md) (7 shared connections)
- [Storyboard Lint](Storyboard_Lint.md) (2 shared connections)

## Source Files

- `scripts/font_subset.py`

## Audit Trail

- EXTRACTED: 20 (100%)
- INFERRED: 0 (0%)
- AMBIGUOUS: 0 (0%)

---

*Part of the graphify knowledge wiki. See [index](index.md) to navigate.*