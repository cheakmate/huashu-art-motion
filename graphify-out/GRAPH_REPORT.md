# Graph Report - huashu-art-motion  (2026-10-22)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 3614 nodes · 7930 edges · 276 communities (137 shown, 139 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 644 edges (avg confidence: 0.85)
- Token cost: 11,840 input · 21,339 output

## Graph Freshness
- Built from commit: `7f4634b8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Animation Mixer Actions
- Audio Synthesis Tools
- Shape Geometry Serialization
- Curve Frames & Raycast
- T2 Scene Drawing
- Vector Math Operations
- Spacex Lin Helpers
- Animation Breakdown Tooling
- GLTF Loader Utils
- Bounding Box Math
- Asset Loader Base
- Clip Layout Audit
- Quaternion Math
- Buffer Geometry Ops
- Vector2 Math
- Clip Theme Tests
- Config & Capabilities
- Minified Symbol Helpers
- SVG Kit
- Vector3 Math Ops
- Object3D Transforms
- Shader Cache
- Storyboard Lint
- Audio Node Graph
- Material Properties
- Spacex WB Scenes
- Renderer Matrix Updates
- Instanced Mesh
- Color Math
- Spacex Scene 11
- Media Config Tests
- Matrix4 Math
- Property Binding
- Matrix3 Math
- Image Generation Tests
- Spacex Lin Scene 11
- Skinning & Materials
- Object Loader
- Animation Action
- PMREM Environment
- T3 Finance Chart
- Spacex Scene 12
- Texture Handling
- XR Controller
- Skeleton Binding
- Line3 Math
- Art History Scene 16
- Voice Training CLI
- Batched Mesh
- Path Drawing
- Euler Rotation
- Spacex Scene 10
- Storyboard Lint Tests
- Voice Config Schema
- Buffer Attributes
- Media API Schema
- T3 Scene Rig
- Delivery Gate Tests
- Buffer Attribute Updates
- Color Serialization
- Uniform Upload & Scene
- Curve Length Sampling
- Keyframe Tracks
- Gothic Art Scene
- Onboarding Preferences Schema
- Reference Asset Fetching
- Buffer Attribute Utils
- Curve Sampling
- Roman Art Scene
- Sisley & Persian Scenes
- Media Policy Schema
- Egypt Segment
- Minimal Copy Helpers
- Animation Clip Parsing
- Cave Art Scene
- Egypt Scene Drawing
- Michelangelo & South Park
- Dunhuang Art Scene
- Boot & Theme Tests
- Release Git Tests
- Delivery Script
- Keynote UI Drawing
- Event Dispatcher
- Spline Curve
- Curve Variants
- Spacex Lin Scene 1
- Greek Art Scene
- Nouveau Art Scene
- Ink Wash Art Scene
- Klimt Art Scene
- Voice Mode Schema
- JSON Clone Helpers
- Quaternion Interpolation
- Perspective Camera
- Spacex Lin Scene 12
- Rocket Drawings
- Spacex Scene 6
- Kirby Comic Scene
- Font Subsetting
- Render Engine
- SVG Character Room
- SpaceX Funding Scene
- SpaceX Island Launch
- Rubber Hose Cartoon
- Ma Yuan Landscape Painting
- Pixar 3D Style
- Physical Material Properties
- Keyframe Interpolation
- Pop Art Warhol Scene
- 8-bit Pixel Scene
- Dunhuang Mural Style
- Blank Frame Detection
- Style Lock Lint
- Release Manifest Check
- Monet Painting Style
- Vector Component Access
- Curve Base Class
- Cubism Style Scene
- Dali Surrealism Scene
- Ghibli Style Scene
- Vaporwave Style Scene
- Voice Registry Schema
- 8-bit Segment Drawing
- LOD Level Detail
- Animation Fading
- Vertex Normals
- Simple Curve Class
- SpaceX Spacecraft Scene
- SpaceX Booster Stats
- Bauhaus Style Scene
- Munch Style Scene
- Kusama Style Scene
- Matisse Style Scene
- Giotto Style Scene
- Palette Resolve Tests
- Camera Rhythm Lint
- Storyboard Rules Lint
- Voice Bindings Schema
- Volcengine Provider Options
- Storytime Scene
- Kinetic Type Scene
- SpaceX Cargo Scene
- SpaceX Booster Recycle
- SpaceX Heavy Launch
- SpaceX Calendar Scene
- SpaceX Chopsticks Catch
- Hopper Style Scene
- Guardi Venice Scene
- Renoir Style Scene
- Pissarro Landscape Scene
- Script Number Matching Tests
- Vector Components & Morphs
- SpaceX Scene 02
- SpaceX Scene 07
- SpaceX Scene 09
- SpaceX Scene 01
- SpaceX Scene 04
- SpaceX Globe Scene
- Haring Art Scene
- Raphael Art Scene
- Cortona Sky Scene
- Gauguin Art Scene
- Ending Scene Tests
- 3Blue1Brown Scene
- Kurzgesagt Scene
- Vox Style Scene
- Whiteboard Style Scene
- Object Lifecycle Methods
- Constructivism Art Scene
- Rembrandt Art Scene
- Shinkai Art Scene
- Lorenzetti Art Scene
- Flat Style Tests
- Grain Finish Effect
- SpaceX Scene 02
- Inverse Smoothstep Scene
- JSON Deserialization
- Copyable Class Methods
- Seurat Art Scene

## God Nodes (most connected - your core abstractions)
1. `W()` - 142 edges
2. `H()` - 131 edges
3. `We` - 109 edges
4. `me` - 89 edges
5. `copy()` - 86 edges
6. `jn` - 62 edges
7. `ci` - 61 edges
8. `be()` - 55 edges
9. `Ii` - 52 edges
10. `Mn` - 49 edges

## Surprising Connections (you probably didn't know these)
- `check()` --calls--> `review_status()`  [INFERRED]
  tests/test_voice_review.py → scripts/voice_review.py
- `back()` --indirect_call--> `H()`  [INFERRED]
  scripts/engine/demos/long_scroll/segments/14_8bit.js → scripts/engine/lib/three.min.js
- `draw()` --indirect_call--> `H()`  [INFERRED]
  scripts/engine/demos/t3_finance_chart/t3_s2.js → scripts/engine/lib/three.min.js
- `drawEra()` --indirect_call--> `H()`  [INFERRED]
  scripts/engine/engine.js → scripts/engine/lib/three.min.js
- `renderFrame()` --indirect_call--> `H()`  [INFERRED]
  scripts/engine/engine.js → scripts/engine/lib/three.min.js

## Import Cycles
- None detected.

## Communities (276 total, 139 thin omitted)

### Community 0 - "Animation Mixer Actions"
Cohesion: 0.03
Nodes (60): _activateAction(), _addInactiveAction(), _addInactiveBinding(), As(), _bindAction(), bs(), clipAction(), Cs() (+52 more)

### Community 1 - "Audio Synthesis Tools"
Cohesion: 0.06
Nodes (76): add(), additive(), adsr(), aulos(), blip(), boing(), bone_flute(), bp() (+68 more)

### Community 2 - "Shape Geometry Serialization"
Cohesion: 0.05
Nodes (26): _c(), Cc(), p(), Ii, r(), s(), kc, lu (+18 more)

### Community 3 - "Curve Frames & Raycast"
Cohesion: 0.06
Nodes (11): ae(), ba(), copy(), T(), Ki(), pr, ru, sa() (+3 more)

### Community 4 - "T2 Scene Drawing"
Cohesion: 0.06
Nodes (51): draw(), draw(), draw(), draw(), draw(), H(), W(), init() (+43 more)

### Community 6 - "Spacex Lin Helpers"
Cohesion: 0.06
Nodes (37): arrow(), at(), bg(), calPage(), cam(), card(), drawBust(), drawFigure() (+29 more)

### Community 7 - "Animation Breakdown Tooling"
Cohesion: 0.08
Nodes (19): frames(), probe(), absolutize(), en(), main(), run_audit(), font(), main() (+11 more)

### Community 8 - "GLTF Loader Utils"
Cohesion: 0.05
Nodes (23): cr, da(), Ge, getCenter(), getSize(), _h(), intersect(), ir (+15 more)

### Community 9 - "Bounding Box Math"
Cohesion: 0.08
Nodes (12): applyMatrix4(), distanceToPoint(), dn, expandByPoint(), expandByScalar(), getX(), gr, Il() (+4 more)

### Community 10 - "Asset Loader Base"
Cohesion: 0.08
Nodes (29): $a(), i(), a(), containsPoint(), i(), la(), load(), a() (+21 more)

### Community 11 - "Clip Layout Audit"
Cohesion: 0.05
Nodes (12): Q, Srv, LocalServer, Q, camera_events(), frame_issues(), LocalServer, merge_runs() (+4 more)

### Community 12 - "Quaternion Math"
Cohesion: 0.07
Nodes (5): getW(), getY(), getZ(), _i(), ke

### Community 13 - "Buffer Geometry Ops"
Cohesion: 0.07
Nodes (3): clampPoint(), ln(), qe

### Community 15 - "Clip Theme Tests"
Cohesion: 0.08
Nodes (18): absolutize(), ex(), render(), setUpModule(), uv(), edge_frac(), img(), lum() (+10 more)

### Community 16 - "Config & Capabilities"
Cohesion: 0.13
Nodes (33): f(), config_path(), ConfigError, credentials(), effective(), note(), inspect_audio(), locked() (+25 more)

### Community 17 - "Minified Symbol Helpers"
Cohesion: 0.08
Nodes (34): Ar(), ce(), er(), d(), f(), p(), u(), x() (+26 more)

### Community 18 - "SVG Kit"
Cohesion: 0.08
Nodes (30): mottlePattern(), mottleURL(), mulberry32(), SK(), beamAndDust(), birds(), cat(), draw() (+22 more)

### Community 20 - "Object3D Transforms"
Cohesion: 0.08
Nodes (3): n(), jn, ya()

### Community 21 - "Shader Cache"
Cohesion: 0.06
Nodes (19): aa(), add(), at(), Ca(), closestPointToPoint(), closestPointToPointParameter(), constructor(), o() (+11 more)

### Community 22 - "Storyboard Lint"
Cohesion: 0.11
Nodes (25): act_residue(), arabic(), blue_purple_hex(), clean_cell(), clip_name(), cn_ints(), cn_values(), columns() (+17 more)

### Community 23 - "Audio Node Graph"
Cohesion: 0.08
Nodes (5): connect(), getInput(), tu, vu, xu()

### Community 24 - "Material Properties"
Cohesion: 0.08
Nodes (10): dh, di, fl, Ha, ih, lh, lo, pi (+2 more)

### Community 25 - "Spacex WB Scenes"
Cohesion: 0.12
Nodes (26): draw(), draw(), draw(), draw(), draw(), back(), draw(), el() (+18 more)

### Community 26 - "Renderer Matrix Updates"
Cohesion: 0.10
Nodes (10): eo, he(), I(), T(), to, ee(), jt(), kt() (+2 more)

### Community 27 - "Instanced Mesh"
Cohesion: 0.08
Nodes (9): clone(), ka(), b(), E(), ko, a(), Qi(), setColors() (+1 more)

### Community 28 - "Color Math"
Cohesion: 0.10
Nodes (4): ci, le(), li(), oe()

### Community 29 - "Spacex Scene 11"
Cohesion: 0.17
Nodes (27): at(), calendar(), calPage(), card(), chipIcon(), coin(), coins(), doodles() (+19 more)

### Community 35 - "Spacex Lin Scene 11"
Cohesion: 0.19
Nodes (25): at(), calendar(), calPage(), card(), chipIcon(), coin(), coins(), draw() (+17 more)

### Community 36 - "Skinning & Materials"
Cohesion: 0.09
Nodes (10): au, bind(), bindSkeletons(), cu, getValue(), parseAsync(), parseGeometries(), parseMaterials() (+2 more)

### Community 37 - "Object Loader"
Cohesion: 0.07
Nodes (9): bo, El, eu, iu, nu, parseObject(), ro, su (+1 more)

### Community 39 - "PMREM Environment"
Cohesion: 0.17
Nodes (6): dispose(), Hr, Ji, kr(), qr(), i()

### Community 40 - "T3 Finance Chart"
Cohesion: 0.14
Nodes (22): C(), draw(), init(), palette(), tint(), base(), charStrokes(), draw() (+14 more)

### Community 41 - "Spacex Scene 12"
Cohesion: 0.16
Nodes (24): alto(), armTheta(), belly(), birds(), camAt(), cel(), cirrus(), clouds() (+16 more)

### Community 42 - "Texture Handling"
Cohesion: 0.10
Nodes (12): gh(), c(), l(), o(), Ie, t(), Ne(), l() (+4 more)

### Community 43 - "XR Controller"
Cohesion: 0.13
Nodes (8): disconnect(), ja(), A(), C(), R(), A(), ns, setSize()

### Community 44 - "Skeleton Binding"
Cohesion: 0.13
Nodes (3): Fo, rr, c()

### Community 45 - "Line3 Math"
Cohesion: 0.09
Nodes (7): equals(), Hc(), h(), qa, h(), l(), ri

### Community 46 - "Art History Scene 16"
Cohesion: 0.17
Nodes (22): background(), catState(), cupState(), decos(), draw(), drawCat(), drawMug(), drips() (+14 more)

### Community 47 - "Voice Training CLI"
Cohesion: 0.18
Nodes (17): api(), cmd_say(), cmd_train(), cmd_voices(), configure_backend(), ffprobe_duration(), fit_duration(), load_env() (+9 more)

### Community 48 - "Batched Mesh"
Cohesion: 0.15
Nodes (4): ml, pc, setUsage(), setX()

### Community 51 - "Spacex Scene 10"
Cohesion: 0.23
Nodes (19): arm(), armTheta(), boosterY(), burst(), caption(), chopsticks(), draw(), flame() (+11 more)

### Community 52 - "Storyboard Lint Tests"
Cohesion: 0.11
Nodes (5): BulletWall, NumberCardRule, tags(), TagsColumn, TemplateExample

### Community 53 - "Voice Config Schema"
Cohesion: 0.10
Nodes (20): pattern, type, type, enum, type, appid_env, env_file, model (+12 more)

### Community 55 - "Media API Schema"
Cohesion: 0.11
Nodes (19): enum, type, enum, type, enum, type, properties, cloud (+11 more)

### Community 56 - "T3 Scene Rig"
Cohesion: 0.14
Nodes (12): draw(), Fc(), gc(), s(), B(), F(), G(), L() (+4 more)

### Community 57 - "Delivery Gate Tests"
Cohesion: 0.15
Nodes (5): DeliverTests, FilmGateTests, gate(), QaCameraEventTests, run()

### Community 58 - "Buffer Attribute Updates"
Cohesion: 0.12
Nodes (3): bi, Mi, Si

### Community 59 - "Color Serialization"
Cohesion: 0.11
Nodes (4): i(), hh, io, no

### Community 60 - "Uniform Upload & Scene"
Cohesion: 0.16
Nodes (10): D(), oa, setValue(), ua(), arrow(), booster(), boosterPaths(), draw() (+2 more)

### Community 62 - "Keyframe Tracks"
Cohesion: 0.18
Nodes (3): bh, eh(), rh

### Community 63 - "Gothic Art Scene"
Cohesion: 0.18
Nodes (9): cat(), chalice(), draw(), girl(), glassTwinkle(), ivy(), runMouse(), snail() (+1 more)

### Community 64 - "Onboarding Preferences Schema"
Cohesion: 0.13
Nodes (16): additionalProperties, enum, type, additionalProperties, properties, type, additionalProperties, properties (+8 more)

### Community 65 - "Reference Asset Fetching"
Cohesion: 0.21
Nodes (10): ahash(), api(), get(), main(), palette(), search(), _dir_frames(), _file() (+2 more)

### Community 66 - "Buffer Attribute Utils"
Cohesion: 0.16
Nodes (3): se(), so, vr()

### Community 68 - "Roman Art Scene"
Cohesion: 0.28
Nodes (15): armPose(), border(), borderStrip(), build(), cat(), cupSprite(), draw(), edt() (+7 more)

### Community 69 - "Sisley & Persian Scenes"
Cohesion: 0.22
Nodes (13): above(), boat(), build(), draw(), skyPlate(), border(), build(), draw() (+5 more)

### Community 70 - "Media Policy Schema"
Cohesion: 0.13
Nodes (14): additionalProperties, additionalProperties, type, properties, policy, revision, schema_version, minimum (+6 more)

### Community 71 - "Egypt Segment"
Cohesion: 0.18
Nodes (6): back(), disc(), nile(), papyrus(), scarab(), scarabWorld()

### Community 73 - "Animation Clip Parsing"
Cohesion: 0.20
Nodes (4): fh(), parseAnimations(), ph(), wh

### Community 74 - "Cave Art Scene"
Cohesion: 0.33
Nodes (11): animals(), beginPath(), cat(), cracks(), draw(), girl(), inkLine(), shape() (+3 more)

### Community 75 - "Egypt Scene Drawing"
Cohesion: 0.27
Nodes (12): blocks(), cat(), chair(), draw(), girl(), handAt(), init(), jar() (+4 more)

### Community 76 - "Michelangelo & South Park"
Cohesion: 0.30
Nodes (12): build(), draw(), formMap(), hatch(), paperPlate(), renderChalk(), warp(), circle() (+4 more)

### Community 77 - "Dunhuang Art Scene"
Cohesion: 0.29
Nodes (13): apsara(), band(), bloom(), build(), deer(), divider(), drapery(), draw() (+5 more)

### Community 78 - "Boot & Theme Tests"
Cohesion: 0.21
Nodes (4): BootFails, Deterministic, img(), OnScreen

### Community 80 - "Delivery Script"
Cohesion: 0.26
Nodes (10): facts_block(), main(), probe(), qa_facts(), review_facts(), sha256(), stamp(), verify() (+2 more)

### Community 81 - "Keynote UI Drawing"
Cohesion: 0.29
Nodes (11): badge(), cardGeoImg(), draw(), drawCard(), drawFull(), drawNumber(), featContent(), hlOn() (+3 more)

### Community 82 - "Event Dispatcher"
Cohesion: 0.18
Nodes (8): i(), _e(), es(), s(), remove(), te, b(), o()

### Community 84 - "Curve Variants"
Cohesion: 0.15
Nodes (3): jl, ql, Xl()

### Community 85 - "Spacex Lin Scene 1"
Cohesion: 0.28
Nodes (11): beat1(), beat2(), beat3(), beat4(), beat5(), beat6(), draw(), failCard() (+3 more)

### Community 86 - "Greek Art Scene"
Cohesion: 0.27
Nodes (10): cat(), curl(), dolphin(), draw(), girl(), head(), lyre(), panel() (+2 more)

### Community 87 - "Nouveau Art Scene"
Cohesion: 0.29
Nodes (12): catHalo(), chair(), crownCurls(), draw(), drawHair(), flowers(), girlHalo(), hairMass() (+4 more)

### Community 88 - "Ink Wash Art Scene"
Cohesion: 0.29
Nodes (11): bamboo(), catInk(), catWash(), draw(), girlArm(), girlInk(), girlWash(), mountains() (+3 more)

### Community 89 - "Klimt Art Scene"
Cohesion: 0.32
Nodes (11): bangs(), cat(), draw(), eye(), face(), hair(), meadow(), robePattern() (+3 more)

### Community 90 - "Voice Mode Schema"
Cohesion: 0.18
Nodes (12): properties, enum, type, mode, provider, system_voice, voice_ref, enum (+4 more)

### Community 91 - "JSON Clone Helpers"
Cohesion: 0.17
Nodes (4): jc, lc, oc, xc()

### Community 94 - "Spacex Lin Scene 12"
Cohesion: 0.30
Nodes (10): camAt(), checkbox(), draw(), endCard(), label(), stop1(), stop2(), stop3() (+2 more)

### Community 95 - "Rocket Drawings"
Cohesion: 0.24
Nodes (8): dragon(), falcon9(), fill(), flame(), heavy(), ship(), starship(), superHeavy()

### Community 96 - "Spacex Scene 6"
Cohesion: 0.30
Nodes (10): car(), draw(), ground(), neon18(), neonFlame(), orbitArc(), sideBooster(), silhouette() (+2 more)

### Community 97 - "Kirby Comic Scene"
Cohesion: 0.36
Nodes (11): caption(), catPanel(), chars(), draw(), gutters(), krackle(), room(), sfx() (+3 more)

### Community 98 - "Font Subsetting"
Cohesion: 0.20
Nodes (4): cjk(), fix_blank_widths(), gb2312_l1(), scan()

### Community 99 - "Render Engine"
Cohesion: 0.33
Nodes (8): boot(), checkCounterGlyphs(), clipFrameUrl(), drawCounter(), drawEra(), load(), loop(), renderFrame()

### Community 100 - "SVG Character Room"
Cohesion: 0.33
Nodes (9): backdrop(), build(), catBodySVG(), catHeadSVG(), girlArmsSVG(), girlHeadSVG(), girlSVG(), tailPath() (+1 more)

### Community 101 - "SpaceX Funding Scene"
Cohesion: 0.35
Nodes (9): attempt(), board(), chipIcon(), draw(), fund(), hero(), medal(), pad() (+1 more)

### Community 102 - "SpaceX Island Launch"
Cohesion: 0.33
Nodes (9): attempt(), draw(), earth(), islandBg(), islandLive(), lowText(), palm(), rocketSprite() (+1 more)

### Community 103 - "Rubber Hose Cartoon"
Cohesion: 0.45
Nodes (10): boing(), cat(), chair(), draw(), girl(), glove(), hose(), pieEye() (+2 more)

### Community 104 - "Ma Yuan Landscape Painting"
Cohesion: 0.35
Nodes (10): bird(), boat(), build(), draw(), mountains(), ripples(), rock(), scholar() (+2 more)

### Community 105 - "Pixar 3D Style"
Cohesion: 0.35
Nodes (10): box(), cylinder(), draw(), fabricGeometry(), fabricMat(), init(), mat(), rounded() (+2 more)

### Community 108 - "Pop Art Warhol Scene"
Cohesion: 0.38
Nodes (9): bubble(), cat(), cup(), draw(), girl(), table(), warhol(), warholCat() (+1 more)

### Community 109 - "8-bit Pixel Scene"
Cohesion: 0.40
Nodes (9): background(), catLayers(), cupPx(), draw(), girlLayers(), hud(), layer(), plant() (+1 more)

### Community 110 - "Dunhuang Mural Style"
Cohesion: 0.36
Nodes (8): apsara(), cat(), cloud(), draw(), girl(), shawl(), table(), windowPanel()

### Community 111 - "Blank Frame Detection"
Cohesion: 0.31
Nodes (3): BlankFrames, gate(), gate_json()

### Community 113 - "Release Manifest Check"
Cohesion: 0.53
Nodes (7): build_manifest(), check(), forbidden(), git(), inspect(), main(), tree()

### Community 114 - "Monet Painting Style"
Cohesion: 0.33
Nodes (6): back(), bloomImg(), dragonflies(), front(), stone(), wisteria()

### Community 117 - "Cubism Style Scene"
Cohesion: 0.44
Nodes (8): cafe(), cat(), draw(), facetize(), girl(), news(), overPlanes(), windowPanes()

### Community 118 - "Dali Surrealism Scene"
Cohesion: 0.42
Nodes (8): antWatch(), cat(), draw(), elephant(), girl(), shadows(), softClock(), softMap()

### Community 119 - "Ghibli Style Scene"
Cohesion: 0.42
Nodes (8): cat(), curtain(), daisies(), draw(), girl(), grass(), komorebi(), tablecloth()

### Community 120 - "Vaporwave Style Scene"
Cohesion: 0.42
Nodes (8): cat(), dialog(), draw(), floorGrid(), girl(), neonSign(), sunset(), table()

### Community 121 - "Voice Registry Schema"
Cohesion: 0.25
Nodes (8): additionalProperties, properties, type, entry, registry_file, speaker_id, type, additionalProperties

### Community 122 - "8-bit Segment Drawing"
Cohesion: 0.43
Nodes (5): back(), build(), coin(), hud(), qblock()

### Community 128 - "SpaceX Spacecraft Scene"
Cohesion: 0.43
Nodes (6): chip(), draw(), drawCrewWindow(), drawDragon(), drawISS(), drawShuttle()

### Community 129 - "SpaceX Booster Stats"
Cohesion: 0.43
Nodes (6): bar(), booster(), draw(), header(), mark(), note()

### Community 130 - "Bauhaus Style Scene"
Cohesion: 0.46
Nodes (7): arcs(), cat(), doll(), draw(), grid(), mug(), rod()

### Community 131 - "Munch Style Scene"
Cohesion: 0.39
Nodes (5): baseFill(), bridge(), chars(), draw(), furniture()

### Community 132 - "Kusama Style Scene"
Cohesion: 0.43
Nodes (6): chars(), draw(), mirrorRoom(), pumpkin(), room(), table()

### Community 133 - "Matisse Style Scene"
Cohesion: 0.43
Nodes (7): algaeShape(), capsule(), chars(), draw(), fallingPaper(), icarus(), wallLife()

### Community 134 - "Giotto Style Scene"
Cohesion: 0.46
Nodes (7): build(), building(), crate(), draw(), ground(), rocks(), sky()

### Community 138 - "Voice Bindings Schema"
Cohesion: 0.29
Nodes (7): additionalProperties, properties, type, bindings, voices, properties, type

### Community 139 - "Volcengine Provider Options"
Cohesion: 0.29
Nodes (7): provider_options, volcengine, additionalProperties, properties, type, additionalProperties, type

### Community 140 - "Storytime Scene"
Cohesion: 0.48
Nodes (5): desk(), draw(), frameChar(), insert(), room()

### Community 141 - "Kinetic Type Scene"
Cohesion: 0.48
Nodes (5): dots(), draw(), drawPage(), ghost(), track()

### Community 142 - "SpaceX Cargo Scene"
Cohesion: 0.48
Nodes (5): cargo(), draw(), moneyBag(), pageA(), pageB()

### Community 143 - "SpaceX Booster Recycle"
Cohesion: 0.48
Nodes (5): boosterAt(), draw(), pageA(), pageB(), recycle()

### Community 144 - "SpaceX Heavy Launch"
Cohesion: 0.48
Nodes (5): car(), draw(), heavyLaunch(), landing(), orbit()

### Community 145 - "SpaceX Calendar Scene"
Cohesion: 0.48
Nodes (5): calendar(), draw(), pageA(), pageC(), scale()

### Community 146 - "SpaceX Chopsticks Catch"
Cohesion: 0.52
Nodes (5): chopsticks(), draw(), ground(), pageA(), pageB()

### Community 147 - "Hopper Style Scene"
Cohesion: 0.48
Nodes (6): cat(), draw(), furniture(), girl(), room(), street()

### Community 148 - "Guardi Venice Scene"
Cohesion: 0.52
Nodes (6): build(), draw(), gondola(), landPlate(), skyPlate(), waterPlate()

### Community 149 - "Renoir Style Scene"
Cohesion: 0.57
Nodes (6): basePlate(), build(), dancers(), draw(), lightPlate(), person()

### Community 150 - "Pissarro Landscape Scene"
Cohesion: 0.52
Nodes (6): build(), draw(), groundPlate(), skyPlate(), treesPlate(), walker()

### Community 155 - "SpaceX Scene 02"
Cohesion: 0.53
Nodes (4): building(), draw(), goal(), row()

### Community 156 - "SpaceX Scene 07"
Cohesion: 0.53
Nodes (4): draw(), pageA(), pageB(), pageC()

### Community 157 - "SpaceX Scene 09"
Cohesion: 0.53
Nodes (4): draw(), pageA(), pageB(), pageC()

### Community 158 - "SpaceX Scene 01"
Cohesion: 0.53
Nodes (4): coralLayer(), draw(), navyLayer(), yellowLayer()

### Community 159 - "SpaceX Scene 04"
Cohesion: 0.60
Nodes (4): draw(), drawDesk(), halftone(), snapshot()

### Community 160 - "SpaceX Globe Scene"
Cohesion: 0.60
Nodes (4): draw(), drawGlobe(), globeAt(), proj()

### Community 162 - "Haring Art Scene"
Cohesion: 0.67
Nodes (5): action(), dancer(), draw(), heart(), radiantBaby()

### Community 163 - "Raphael Art Scene"
Cohesion: 0.60
Nodes (5): astrolabe(), book(), build(), draw(), fig()

### Community 164 - "Cortona Sky Scene"
Cohesion: 0.67
Nodes (5): build(), cloud(), draw(), ribbon(), skyOnly()

### Community 165 - "Gauguin Art Scene"
Cohesion: 0.60
Nodes (5): boyGoat(), build(), draw(), leaves(), woman()

### Community 167 - "3Blue1Brown Scene"
Cohesion: 0.60
Nodes (3): box(), draw(), label()

### Community 168 - "Kurzgesagt Scene"
Cohesion: 0.60
Nodes (3): camAt(), draw(), drawLevel()

### Community 169 - "Vox Style Scene"
Cohesion: 0.70
Nodes (4): draw(), drawItem(), imgBox(), init()

### Community 170 - "Whiteboard Style Scene"
Cohesion: 0.60
Nodes (4): draw(), init(), layout(), penAt()

### Community 173 - "Constructivism Art Scene"
Cohesion: 0.70
Nodes (4): cat(), draw(), girl(), glyph()

### Community 175 - "Shinkai Art Scene"
Cohesion: 0.70
Nodes (4): cat(), draw(), girl(), sky()

### Community 176 - "Lorenzetti Art Scene"
Cohesion: 0.70
Nodes (4): block(), build(), draw(), tiny()

### Community 181 - "SpaceX Scene 02"
Cohesion: 0.83
Nodes (3): build(), draw(), init()

## Knowledge Gaps
- **139 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `W()` connect `T2 Scene Drawing` to `SpaceX Spacecraft Scene`, `SpaceX Booster Stats`, `Munch Style Scene`, `Kusama Style Scene`, `Giotto Style Scene`, `Spacex Lin Helpers`, `Minified Symbol Helpers`, `SVG Kit`, `Hopper Style Scene`, `Guardi Venice Scene`, `Renoir Style Scene`, `Pissarro Landscape Scene`, `SpaceX Scene 01`, `SpaceX Scene 04`, `SpaceX Globe Scene`, `Haring Art Scene`, `Raphael Art Scene`, `Cortona Sky Scene`, `Gauguin Art Scene`, `T3 Finance Chart`, `Spacex Scene 12`, `Constructivism Art Scene`, `Art History Scene 16`, `Rembrandt Art Scene`, `Shinkai Art Scene`, `Lorenzetti Art Scene`, `Spacex Scene 10`, `SpaceX Scene 02`, `Inverse Smoothstep Scene`, `Uniform Upload & Scene`, `Roman Art Scene`, `Sisley & Persian Scenes`, `Seurat Art Scene`, `Cave Art Scene`, `Egypt Scene Drawing`, `Michelangelo & South Park`, `Dunhuang Art Scene`, `Nouveau Art Scene`, `Ink Wash Art Scene`, `Klimt Art Scene`, `Spacex Scene 6`, `Kirby Comic Scene`, `Render Engine`, `SpaceX Island Launch`, `Pop Art Warhol Scene`, `8-bit Pixel Scene`, `Dunhuang Mural Style`, `Dali Surrealism Scene`, `Ghibli Style Scene`, `Vaporwave Style Scene`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Are the 139 inferred relationships involving `W()` (e.g. with `draw()` and `draw()`) actually correct?**
  _`W()` has 139 INFERRED edges - model-reasoned connections that need verification._
- **Should `Animation Mixer Actions` be split into smaller, more focused modules?**
  _Cohesion score 0.02913806254767353 - nodes in this community are weakly interconnected._
- **Why does `H()` connect `T2 Scene Drawing` to `SpaceX Spacecraft Scene`, `SpaceX Booster Stats`, `Shape Geometry Serialization`, `Munch Style Scene`, `Kusama Style Scene`, `Giotto Style Scene`, `Spacex Lin Helpers`, `Buffer Geometry Ops`, `SVG Kit`, `Hopper Style Scene`, `Guardi Venice Scene`, `Renoir Style Scene`, `Pissarro Landscape Scene`, `SpaceX Scene 01`, `SpaceX Scene 04`, `SpaceX Globe Scene`, `Raphael Art Scene`, `Cortona Sky Scene`, `Gauguin Art Scene`, `T3 Finance Chart`, `Spacex Scene 12`, `Art History Scene 16`, `Rembrandt Art Scene`, `Batched Mesh`, `Shinkai Art Scene`, `Lorenzetti Art Scene`, `Spacex Scene 10`, `SpaceX Scene 02`, `Inverse Smoothstep Scene`, `T3 Scene Rig`, `Uniform Upload & Scene`, `Roman Art Scene`, `Sisley & Persian Scenes`, `Seurat Art Scene`, `Cave Art Scene`, `Egypt Scene Drawing`, `Michelangelo & South Park`, `Nouveau Art Scene`, `Ink Wash Art Scene`, `Klimt Art Scene`, `Spacex Scene 6`, `Kirby Comic Scene`, `Render Engine`, `SpaceX Island Launch`, `8-bit Pixel Scene`, `Dunhuang Mural Style`, `Dali Surrealism Scene`, `Ghibli Style Scene`, `Vaporwave Style Scene`, `8-bit Segment Drawing`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Are the 127 inferred relationships involving `H()` (e.g. with `back()` and `draw()`) actually correct?**
  _`H()` has 127 INFERRED edges - model-reasoned connections that need verification._
- **Should `Audio Synthesis Tools` be split into smaller, more focused modules?**
  _Cohesion score 0.06163677592249021 - nodes in this community are weakly interconnected._
- **Why does `Wa()` connect `Minified Symbol Helpers` to `Animation Mixer Actions`, `Curve Frames & Raycast`, `T2 Scene Drawing`, `GLTF Loader Utils`, `Line3 Math`, `Event Dispatcher`, `Renderer Matrix Updates`, `Instanced Mesh`, `Color Math`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._