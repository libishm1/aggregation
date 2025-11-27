aggregation
===========

Rule-based Three.js aggregation demo showing brick-like modules that can be procedurally stacked, optionally “settled” with a simple vertical physics pass, framed automatically on load, and exported to GLB with Rhino-friendly orientation and 0.1 scaling.

Features
--------
- Procedural aggregation with anchor-based stacking rules and adjustable seed/iteration count.
- Configurable brick dimensions (0.4 × 0.2 × 0.2) and base grid spacing with collision margin controls.
- Optional physics settle: drops non-base modules vertically onto supporting geometry.
- Auto-framing camera to the aggregation on load/regenerate.
- GLB export with Rhino axis conversion and filename timestamping.

Getting started
---------------
1) Install Node 20+ (or use the included portable `C:\node-v20.17.0-win-x64\` if present).
2) Install dependencies:
   - On Windows PowerShell: `set PATH=C:\node-v20.17.0-win-x64;%PATH%` (if using portable Node)  
   - Then: `npm install`
3) Run the dev server: `npm run dev -- --host --port 5173` and open http://localhost:5173

Controls
--------
- **Seed / Regenerate**: change the random seed and rebuild the aggregation.
- **Anchors & Herringbone angle**: tune anchor offset, vertical offset, and rotation for stacking patterns.
- **Base grid**: set column/row counts and spacing (defaults 0.4, 0.4).
- **Collision margin**: adjust overlap tolerance (negative shrinks bounding boxes for looser fit).
- **Physics**: toggle to settle non-base bricks straight down onto supports.
- **Export GLB**: downloads a Rhino-oriented GLB with 0.1 scale and timestamped filename.
