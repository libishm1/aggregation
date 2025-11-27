import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  RuleBasedAggregator,
  defaultRules,
  defaultCompatibility,
  buildModule,
  defaultModule,
  defaultProfile,
  exportGroupAsGLB,
} from "./aggregation.js";

const skyColor = "#0b1620";

export default function App() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const profileSvgRef = useRef(null);
  const sceneRef = useRef(null);
  const groupRef = useRef(null);
  const gizmoGroupRef = useRef(null);
  const aggregatorRef = useRef(null);
  const [seed, setSeed] = useState("6148");
  const [seedValue, setSeedValue] = useState(6148);
  const [iterations, setIterations] = useState(40);
  const [baseCols, setBaseCols] = useState(4);
  const [baseRows, setBaseRows] = useState(3);
  const [spacingX, setSpacingX] = useState(0.4);
  const [spacingY, setSpacingY] = useState(0.4);
  const [collisionMargin, setCollisionMargin] = useState(0);
  const [physicsEnabled, setPhysicsEnabled] = useState(false);
  const [profilePoints, setProfilePoints] = useState(defaultProfile);
  const [draggingIdx, setDraggingIdx] = useState(null);
  const [anchorOffset, setAnchorOffset] = useState(0.3); // world units along X
  const [anchorY, setAnchorY] = useState(0); // normalized -1..1 along Y (anchor B)
  const [angleDeg, setAngleDeg] = useState(0); // align bricks
  const [stats, setStats] = useState({ placed: 0, instances: 0, open: 0 });
  const [isExporting, setIsExporting] = useState(false);

  const runAggregation = (nextSeed = seed, count = iterations) => {
    const group = groupRef.current;
    const gizmoGroup = gizmoGroupRef.current;
    if (!group || !gizmoGroup) return;
    group.clear();
    gizmoGroup.clear();

    const anchorDiag = 0; // horizontal anchor on X
    const anchorDiagB = anchorY; // vertical anchor on Y (slider)
    const anchorRot = angleDeg;
    const anchorRotB = -angleDeg;
    const moduleDef = buildModule(anchorOffset, anchorDiag, anchorRot, anchorDiagB, anchorRotB, profilePoints);
    const aggregator = new RuleBasedAggregator({
      moduleDef,
      rules: defaultRules,
      compatibility: defaultCompatibility,
      seed: nextSeed,
      collisionMargin,
    });
    aggregator.bindGroup(group);
    aggregator.bindGizmos(gizmoGroup);
    aggregatorRef.current = aggregator;

    const cols = Math.max(1, Number.isFinite(baseCols) ? baseCols : 4);
    const rows = Math.max(1, Number.isFinite(baseRows) ? baseRows : 3);
    const sX = Math.max(0.4, Number.isFinite(spacingX) ? spacingX : 0.4);
    const sY = Math.max(0.4, Number.isFinite(spacingY) ? spacingY : 0.4);
    aggregator.buildBaseGrid(cols, rows, sX, sY, 0);
    const result = aggregator.aggregate({ count });
    aggregator.settleInstances(physicsEnabled);
    setStats({
      placed: result.placed,
      instances: aggregator.instances.length,
      open: aggregator.openSockets.length,
    });
    frameAggregation();
  };

  const frameAggregation = () => {
    const group = groupRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!group || !camera || !controls) return;
    const box = new THREE.Box3().setFromObject(group);
    if (box.isEmpty()) return;
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxSize = Math.max(size.x, size.y, size.z);
    const halfFov = (camera.fov * Math.PI) / 360;
    const distance = (maxSize / 2) / Math.tan(halfFov);
    const offset = distance * 1.2;
    camera.position.copy(center.clone().add(new THREE.Vector3(offset, offset, offset * 0.8)));
    camera.near = Math.max(0.01, distance / 100);
    camera.far = Math.max(camera.far, distance * 10 + maxSize);
    camera.updateProjectionMatrix();
    controls.target.copy(center);
    controls.update();
  };

  useEffect(() => {
    if (aggregatorRef.current) {
      aggregatorRef.current.settleInstances(physicsEnabled);
      frameAggregation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [physicsEnabled]);

  useEffect(() => {
    runAggregation(seed, iterations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilePoints]);

  const updateProfilePoint = (idx, key, value) => {
    setProfilePoints((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [key]: Number(value) } : p))
    );
  };

  const addProfilePoint = () => {
    setProfilePoints((prev) => {
      const last = prev[prev.length - 1] || { x: 0, y: 0 };
      return [...prev, { x: last.x, y: last.y }];
    });
  };

  const computeProfileBounds = (pts = profilePoints) => {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    pts.forEach((p) => {
      minX = Math.min(minX, p.x);
      minY = Math.min(minY, p.y);
      maxX = Math.max(maxX, p.x);
      maxY = Math.max(maxY, p.y);
    });
    if (!pts.length || !Number.isFinite(minX)) {
      minX = minY = -0.5;
      maxX = maxY = 0.5;
    }
    return { minX, minY, maxX, maxY };
  };

  const profileToSvg = (p) => {
    const { minX, minY, maxX, maxY } = computeProfileBounds();
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const size = Math.max(maxX - minX, maxY - minY, 1);
    const nx = (p.x - cx) / size + 0.5;
    const ny = 0.5 - (p.y - cy) / size;
    return {
      x: nx * 200,
      y: ny * 200,
    };
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (draggingIdx === null) return;
      const svg = profileSvgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width;
      const ny = (e.clientY - rect.top) / rect.height;

      const { minX, minY, maxX, maxY } = computeProfileBounds();
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      const size = Math.max(maxX - minX, maxY - minY, 1);

      const px = (nx - 0.5) * size + cx;
      const py = (0.5 - ny) * size + cy;
      setProfilePoints((prev) =>
        prev.map((p, i) => (i === draggingIdx ? { ...p, x: px, y: py } : p))
      );
    };

    const handleUp = () => setDraggingIdx(null);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [draggingIdx]);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(skyColor);
    scene.fog = new THREE.Fog(skyColor, 35, 120);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 200);
    camera.position.set(12, 12, 14);
    camera.up.set(0, 0, 1); // z is up
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, 0, 3);
    controls.update();
    controlsRef.current = controls;

    // Lights
    const hemi = new THREE.HemisphereLight(0xc7dfff, 0x0b0f17, 0.55);
    scene.add(hemi);
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(18, 12, 22);
    dir.castShadow = true;
    dir.shadow.mapSize.set(1024, 1024);
    dir.shadow.camera.left = -30;
    dir.shadow.camera.right = 30;
    dir.shadow.camera.top = 30;
    dir.shadow.camera.bottom = -30;
    scene.add(dir);

    // Ground plane (XY plane, z up)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: 0x0f1823, roughness: 0.9, metalness: 0.0 })
    );
    ground.receiveShadow = true;
    ground.rotation.x = 0;
    ground.rotation.y = 0;
    ground.position.z = 0;
    scene.add(ground);

    const grid = new THREE.GridHelper(80, 80, 0x2d3d52, 0x162235);
    grid.rotation.x = Math.PI / 2; // orient onto XY plane
    grid.position.z = 0.001; // slight offset to avoid z-fighting
    scene.add(grid);

    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    const gizmoGroup = new THREE.Group();
    gizmoGroupRef.current = gizmoGroup;
    scene.add(gizmoGroup);

    // Aggregator setup
    runAggregation(seed, iterations);

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current) return;
      const { clientWidth, clientHeight } = container;
      rendererRef.current.setSize(clientWidth, clientHeight);
      cameraRef.current.aspect = clientWidth / clientHeight;
      cameraRef.current.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    let animFrame;
    const animate = () => {
      animFrame = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      controls.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleExport = async () => {
    if (!groupRef.current) return;
    setIsExporting(true);
    try {
      const blob = await exportGroupAsGLB(groupRef.current);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const now = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(
        now.getMinutes()
      )}${pad(now.getSeconds())}`;
      a.download = `aggregation-${stamp}.glb`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed", err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="app">
      <div className="viewport" ref={containerRef} />
      <div className="hud">
        <h1>aggregation - rule aggregation</h1>
        <div className="section">
          <div className="label">Seed</div>
          <div className="row">
            <input
              value={seed}
              onChange={(e) => {
                const val = e.target.value;
                setSeed(val);
                const num = Number(val);
                if (!Number.isNaN(num)) setSeedValue(num);
              }}
            />
            <button
              onClick={() => {
                const next = String(Math.floor(Math.random() * 10000));
                setSeed(next);
                setSeedValue(Number(next));
                runAggregation(next, iterations);
              }}
              className="primary"
            >
              Regenerate
            </button>
          </div>
          <div className="row">
            <input
              type="range"
              min="0"
              max="9999"
              step="1"
              value={seedValue}
              onChange={(e) => {
                const val = Number(e.target.value);
                setSeedValue(val);
                setSeed(String(val));
              }}
            />
            <div className="chip">seed: {seedValue}</div>
          </div>

          <div className="label">Connection anchor (herringbone)</div>
          <div className="anchor-row">
            <div className="anchor-rect">
              <div
                className="anchor-line anchor-line-a"
                style={{
                  left: `${50 + (anchorOffset / 1.0) * 50}%`,
                  transform: `rotate(${angleDeg}deg)`,
                }}
              />
              <div
                className="anchor-line anchor-line-b"
                style={{
                  top: `${50 - anchorY * 50}%`,
                  transform: `translate(-50%, -50%) rotate(${-angleDeg}deg)`,
                  left: `${50 + (anchorOffset / 1.0) * 50}%`,
                }}
              />
            </div>
            <input
              type="range"
              min="-1"
              max="1"
              step="0.05"
              value={anchorOffset}
              onChange={(e) => setAnchorOffset(parseFloat(e.target.value || "0"))}
            />
            <div className="chip">{anchorOffset.toFixed(2)} u</div>
          </div>

          <div className="label">Vertical anchor offset (B)</div>
          <div className="row">
            <input
              type="range"
              min="-1"
              max="1"
              step="0.05"
              value={anchorY}
              onChange={(e) => setAnchorY(parseFloat(e.target.value || "0"))}
            />
            <div className="chip">Y: {anchorY.toFixed(2)}</div>
          </div>

          <div className="label">Herringbone angle</div>
          <div className="row">
            <input
              type="range"
              min="0"
              max="90"
              step="1"
              value={angleDeg}
              onChange={(e) => setAngleDeg(parseFloat(e.target.value || "0"))}
            />
            <div className="chip">{angleDeg.toFixed(0)} deg / {(-angleDeg).toFixed(0)} deg</div>
          </div>
          <div className="label">Iterations (modules)</div>
          <div className="row">
            <input
              type="number"
              min="1"
              max="200"
              value={iterations}
              onChange={(e) => setIterations(parseInt(e.target.value || "0", 10))}
            />
            <button onClick={() => runAggregation(seed, iterations)}>Run</button>
          </div>
        </div>

        <div className="section">
          <div className="label">Base grid</div>
          <div className="row">
            <input
              type="number"
              min="1"
              max="12"
              value={baseCols}
              onChange={(e) => setBaseCols(parseInt(e.target.value || "0", 10))}
              placeholder="Cols"
            />
            <input
              type="number"
              min="1"
              max="12"
              value={baseRows}
              onChange={(e) => setBaseRows(parseInt(e.target.value || "0", 10))}
              placeholder="Rows"
            />
          </div>
          <div className="row">
            <input
              type="number"
              step="0.05"
              min="0.4"
              max="5"
              value={spacingX}
              onChange={(e) => setSpacingX(parseFloat(e.target.value || "0"))}
              placeholder="Spacing X"
            />
            <input
              type="number"
              step="0.05"
              min="0.4"
              max="5"
              value={spacingY}
              onChange={(e) => setSpacingY(parseFloat(e.target.value || "0"))}
              placeholder="Spacing Y"
            />
          </div>
        </div>

        <div className="section">
          <div className="label">Collision margin</div>
          <div className="row">
            <input
              type="range"
              min="-0.05"
              max="0.1"
              step="0.001"
              value={collisionMargin}
              onChange={(e) => setCollisionMargin(parseFloat(e.target.value || "0"))}
            />
            <input
              type="number"
              step="0.001"
              min="-0.05"
              max="0.1"
              value={collisionMargin}
              onChange={(e) => setCollisionMargin(parseFloat(e.target.value || "0"))}
              style={{ width: "90px" }}
            />
            <div className="chip">{collisionMargin.toFixed(3)} u</div>
          </div>
          <p className="note">Adjust clearance per brick; negative values shrink the collision box for a more relaxed fit.</p>
        </div>

        <div className="section">
          <div className="label">Physics</div>
          <div className="row">
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="checkbox"
                checked={physicsEnabled}
                onChange={(e) => setPhysicsEnabled(e.target.checked)}
              />
              Enable settle (drop bricks onto supports)
            </label>
          </div>
          <p className="note">Drops non-base bricks straight down until they rest on the ground or supporting boxes.</p>
        </div>

        <div className="section">
          <div className="label">Extrusion profile (XY)</div>
          <svg
            ref={profileSvgRef}
            width="200"
            height="200"
            style={{ border: "1px solid #1f2a38", background: "#0f1823", marginBottom: "8px" }}
          >
            <rect x="0" y="0" width="200" height="200" fill="#0f1823" />
            <polygon
              points={profilePoints.map((p) => {
                const { x, y } = profileToSvg(p);
                return `${x},${y}`;
              })}
              fill="rgba(62,166,255,0.2)"
              stroke="#3ea6ff"
              strokeWidth="1.5"
            />
            {profilePoints.map((p, idx) => {
              const { x, y } = profileToSvg(p);
              return (
                <circle
                  key={`pt-${idx}`}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#ff944d"
                  stroke="#111722"
                  strokeWidth="1.5"
                  style={{ cursor: "grab" }}
                  onMouseDown={() => setDraggingIdx(idx)}
                />
              );
            })}
          </svg>
          {profilePoints.map((p, idx) => (
            <div key={`${idx}-${p.x}-${p.y}`} className="row">
              <div className="chip">Pt {idx + 1}</div>
              <input
                type="number"
                step="0.01"
                value={p.x}
                onChange={(e) => updateProfilePoint(idx, "x", e.target.value)}
                placeholder="x"
              />
              <input
                type="number"
                step="0.01"
                value={p.y}
                onChange={(e) => updateProfilePoint(idx, "y", e.target.value)}
                placeholder="y"
              />
            </div>
          ))}
          <div className="row">
            <button onClick={addProfilePoint}>Add point</button>
            <div className="note">Edit coordinates to reshape the profile; points extrude along +Z.</div>
          </div>
        </div>

        <div className="section">
          <div className="label">Rules (from -&gt; to)</div>
          {defaultRules.map((r) => (
            <div key={r.id} className="rule">
              <span>
                {r.from} -&gt; {r.to}
              </span>
              <span>{Math.round((r.weight || 1) * 100)}%</span>
            </div>
          ))}
          <p className="note">
            Vertical stacking: anchor-based offsets only (anchors act as control points). Anchors: long-side shift, two diagonals
            across the face (A/B) with independent rotations. Base grid size/spacing is adjustable; seed + regenerate to explore.
          </p>
        </div>

        <div className="section">
          <div className="label">Stats</div>
          <div className="stats">
            <div className="chip">Placed: {stats.placed}</div>
            <div className="chip">Instances: {stats.instances}</div>
            <div className="chip">Open sockets: {stats.open}</div>
            <div className="chip">Seed: {seed}</div>
          </div>
        </div>

        <div className="section">
          <button onClick={handleExport} disabled={isExporting} className="primary">
            {isExporting ? "Exporting..." : "Export GLB"}
          </button>
          <p className="note">Exports the current aggregation (base + generated modules) as a GLB file.</p>
        </div>
      </div>
    </div>
  );
}
