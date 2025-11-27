import * as THREE from "three";
import seedrandom from "seedrandom";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

const EPS = 1e-4;

const baseMaterial = new THREE.MeshStandardMaterial({
  color: 0x455064,
  roughness: 0.65,
  metalness: 0.05,
});

const aggregateMaterial = new THREE.MeshStandardMaterial({
  color: 0x3ea6ff,
  roughness: 0.4,
  metalness: 0.1,
});

// Rectangular brick dimensions (x, y, z). Z is up.
const sizeX = 0.4;
const sizeY = 0.2;
const sizeZ = 0.2;
const halfX = sizeX / 2;
const halfY = sizeY / 2;
const halfZ = sizeZ / 2;

function buildProfileGeometry(profilePoints = defaultProfile) {
  const pts = Array.isArray(profilePoints) ? profilePoints : [];
  if (pts.length < 3) {
    return new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  }

  // Normalize the profile to fit the target size and center on the origin.
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  pts.forEach((p) => {
    if (p?.x === undefined || p?.y === undefined) return;
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  });

  const width = maxX - minX || 1;
  const height = maxY - minY || 1;
  const centerX = minX + width / 2;
  const centerY = minY + height / 2;

  const scaled = pts
    .filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y))
    .map((p) => {
      const x = ((p.x - centerX) / width) * sizeX;
      const y = ((p.y - centerY) / height) * sizeY;
      return new THREE.Vector2(x, y);
    });

  if (scaled.length < 3) {
    return new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
  }

  const shape = new THREE.Shape();
  shape.moveTo(scaled[0].x, scaled[0].y);
  for (let i = 1; i < scaled.length; i++) {
    shape.lineTo(scaled[i].x, scaled[i].y);
  }
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: sizeZ,
    bevelEnabled: false,
  });
  geometry.translate(0, 0, -halfZ); // center on z=0 with half-height up/down
  return geometry;
}

export const defaultProfile = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 },
];

// Build a module with sockets offset along the long side by anchorX and optionally along two diagonals across the face
// (anchorDiagA/anchorDiagB on Y), each with an optional rotation around Z in degrees.
export function buildModule(
  anchorX = 0,
  anchorDiagA = 0,
  anchorRotA = 0,
  anchorDiagB = 0,
  anchorRotB = 0,
  profilePoints = defaultProfile
) {
  const clampedX = Math.max(-halfX, Math.min(halfX, anchorX));
  const clampDiag = (v) => Math.max(-halfY, Math.min(halfY, v * halfY));
  const clampedYA = clampDiag(anchorDiagA);
  const clampedYB = clampDiag(anchorDiagB);

  // Extrude the supplied profile in XY; fallback to box if invalid.
  const geometry = buildProfileGeometry(profilePoints);
  const rotA = (anchorRotA * Math.PI) / 180;
  const rotB = (anchorRotB * Math.PI) / 180;
  const posTopA = new THREE.Vector3(clampedX, clampedYA, halfZ).applyAxisAngle(new THREE.Vector3(0, 0, 1), rotA);
  const posBottomA = new THREE.Vector3(clampedX, clampedYA, -halfZ).applyAxisAngle(new THREE.Vector3(0, 0, 1), rotA);
  const posTopB = new THREE.Vector3(clampedX, clampedYB, halfZ).applyAxisAngle(new THREE.Vector3(0, 0, 1), rotB);
  const posBottomB = new THREE.Vector3(clampedX, clampedYB, -halfZ).applyAxisAngle(new THREE.Vector3(0, 0, 1), rotB);
  return {
    id: "brick",
    geometry,
    anchorPrimary: { x: clampedX, y: clampedYA, rotDeg: anchorRotA },
    anchorSecondary: { x: clampedX, y: clampedYB, rotDeg: anchorRotB },
    sockets: [
      {
        id: "top-stack-A",
        position: posTopA,
        normal: new THREE.Vector3(0, 0, 1),
        type: "stackA-top",
      },
      {
        id: "bottom-stack-A",
        position: posBottomA,
        normal: new THREE.Vector3(0, 0, -1),
        type: "stackA-bottom",
      },
      {
        id: "top-stack-B",
        position: posTopB,
        normal: new THREE.Vector3(0, 0, 1),
        type: "stackB-top",
      },
      {
        id: "bottom-stack-B",
        position: posBottomB,
        normal: new THREE.Vector3(0, 0, -1),
        type: "stackB-bottom",
      },
    ],
  };
}

export const defaultModule = buildModule(0.5, 0, 0, 1, 0, defaultProfile);

// Only anchor-based stacking.
export const defaultRules = [
  { id: "stack-anchor-offset-a", from: "stackA-top", to: "stackA-bottom", weight: 0.5 },
  { id: "stack-anchor-offset-b", from: "stackB-top", to: "stackB-bottom", weight: 0.5 },
];

// Compatibility map: which socket types can connect, with weights.
export const defaultCompatibility = {
  "stackA-top": [
    { to: "stackA-bottom", weight: 0.5, anchor: "A", id: "stack-anchor-offset-a" },
    { to: "stackB-bottom", weight: 0.5, anchor: "B", id: "stack-anchor-offset-b" },
  ],
  "stackB-top": [
    { to: "stackB-bottom", weight: 0.5, anchor: "B", id: "stack-anchor-offset-b" },
    { to: "stackA-bottom", weight: 0.5, anchor: "A", id: "stack-anchor-offset-a" },
  ],
  "stackA-bottom": [
    { to: "stackA-top", weight: 0.5, anchor: "A", id: "stack-anchor-offset-a" },
    { to: "stackB-top", weight: 0.5, anchor: "B", id: "stack-anchor-offset-b" },
  ],
  "stackB-bottom": [
    { to: "stackB-top", weight: 0.5, anchor: "B", id: "stack-anchor-offset-b" },
    { to: "stackA-top", weight: 0.5, anchor: "A", id: "stack-anchor-offset-a" },
  ],
  "stackC-top": [],
  "stackC-bottom": [],
};

const tmpBox = new THREE.Box3();
const tmpBox2 = new THREE.Box3();
const tmpMat3 = new THREE.Matrix3();
const tmpVec3 = new THREE.Vector3();
const tmpQuat = new THREE.Quaternion();

function boxesIntersectLoose(a, b) {
  // Allow face contact; only reject when overlapping volume is positive on all axes.
  return !(
    a.max.x <= b.min.x + EPS ||
    a.min.x >= b.max.x - EPS ||
    a.max.y <= b.min.y + EPS ||
    a.min.y >= b.max.y - EPS ||
    a.max.z <= b.min.z + EPS ||
    a.min.z >= b.max.z - EPS
  );
}

function weightedPick(items, rng) {
  const total = items.reduce((sum, r) => sum + (r.weight || 1), 0);
  const r = rng() * total;
  let acc = 0;
  for (const item of items) {
    acc += item.weight || 1;
    if (r <= acc) return item;
  }
  return items[items.length - 1] || null;
}

function transformSocket(socket, matrix) {
  const position = socket.position.clone().applyMatrix4(matrix);
  const normalMatrix = tmpMat3.getNormalMatrix(matrix);
  const normal = socket.normal.clone().applyMatrix3(normalMatrix).normalize();
  return { ...socket, worldPosition: position, worldNormal: normal };
}

export class RuleBasedAggregator {
  constructor({
    moduleDef = defaultModule,
    rules = defaultRules,
    compatibility = defaultCompatibility,
    seed = "demo",
    collisionMargin = 0,
  } = {}) {
    this.moduleDef = moduleDef;
    this.rules = rules;
    this.compatibility = compatibility;
    // Allow slight shrink/expansion of the bounding box. Negative = relaxed fit.
    this.collisionMargin = Math.min(0.1, Math.max(-0.05, collisionMargin));
    // Anchors: primary and secondary; fall back to socket data if not provided.
    const firstSocket = this.moduleDef.sockets?.[0];
    this.anchorA = {
      x: this.moduleDef.anchorPrimary?.x ?? firstSocket?.position?.x ?? 0,
      y: this.moduleDef.anchorPrimary?.y ?? firstSocket?.position?.y ?? 0,
      rotDeg: this.moduleDef.anchorPrimary?.rotDeg ?? 0,
    };
    this.anchorB = {
      x: this.moduleDef.anchorSecondary?.x ?? firstSocket?.position?.x ?? 0,
      y: this.moduleDef.anchorSecondary?.y ?? 0,
      rotDeg: this.moduleDef.anchorSecondary?.rotDeg ?? 0,
    };
    this.setSeed(seed);
    this.instances = [];
    this.openSockets = [];
    this.group = null;
    this.gizmoGroup = null;

    // Cache bounding box
    this.moduleDef.geometry.computeBoundingBox();
    this.baseBoundingBox = this.moduleDef.geometry.boundingBox.clone();
    this.moduleHalfHeight = (this.baseBoundingBox.max.z - this.baseBoundingBox.min.z) / 2;
  }

  bindGroup(group) {
    this.group = group;
  }

  bindGizmos(gizmoGroup) {
    this.gizmoGroup = gizmoGroup;
  }

  setSeed(seed) {
    this.seed = seed;
    this.rng = seedrandom(seed || "demo");
  }

  clear() {
    this.instances = [];
    this.openSockets = [];
    if (this.group) {
      this.group.clear();
    }
    if (this.gizmoGroup) {
      this.gizmoGroup.clear();
    }
  }

  buildBaseGrid(cols = 4, rows = 3, spacingX = sizeX * 1.05, spacingY = sizeY * 1.05, baseHeight = 0) {
    if (!this.group) throw new Error("Group not bound");
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetY = ((rows - 1) * spacingY) / 2;
    let idx = 0;
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const cx = x * spacingX - offsetX;
        const cy = y * spacingY - offsetY;
        const cz = baseHeight + this.moduleHalfHeight; // sit on z=0 plane
        const matrix = new THREE.Matrix4().makeTranslation(cx, cy, cz);
        this.addInstance(matrix, { isBase: true, name: `base-${idx++}` });
      }
    }
  }

  addInstance(matrix, { isBase = false, name = "", skipSocketId = null } = {}) {
    const mesh = new THREE.Mesh(this.moduleDef.geometry, isBase ? baseMaterial : aggregateMaterial);
    mesh.matrixAutoUpdate = false;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.matrix.copy(matrix);
    mesh.name = name || `inst-${this.instances.length}`;
    this.group.add(mesh);

    const bbox = this.baseBoundingBox.clone().applyMatrix4(matrix);
    const sockets = this.moduleDef.sockets
      .filter((s) => (skipSocketId ? s.id !== skipSocketId : true))
      .map((s) => transformSocket(s, matrix));
    // Expose top (and bottom for non-base to allow cross-stack connections).
    // Only expose upward-facing sockets to grow above the base plane.
    const usableSockets = sockets.filter((s) => s.worldNormal.z > 0.4);

    const id = mesh.name;
    this.instances.push({ id, matrix, bbox, mesh, isBase });

    if (this.gizmoGroup) {
      const sphereGeo = new THREE.SphereGeometry(0.02, 12, 12);
      const colors = {
        "stackA-top": 0xff944d,
        "stackA-bottom": 0xff944d,
        "stackB-top": 0x8ef7ff,
        "stackB-bottom": 0x8ef7ff,
      };
      usableSockets.forEach((s) => {
        const mat = new THREE.MeshBasicMaterial({ color: colors[s.type] || 0xffffff });
        const marker = new THREE.Mesh(sphereGeo, mat);
        marker.position.copy(s.worldPosition);
        this.gizmoGroup.add(marker);
      });
    }
    for (const sock of usableSockets) {
      this.openSockets.push({ ...sock, instanceId: id });
    }
  }

  pickRuleForType(type) {
    const compat = this.compatibility[type];
    if (!compat || !compat.length) return null;
    return weightedPick(compat, this.rng);
  }

  tryAttach(targetIndex, maxTries = 16) {
    const target = this.openSockets[targetIndex];
    if (!target) return false;
    const rule = this.pickRuleForType(target.type);
    if (!rule) {
      // No rule -> remove this socket from frontier
      this.openSockets.splice(targetIndex, 1);
      return false;
    }

    // Select candidate sockets matching compatibility.
    const candidates = this.moduleDef.sockets.filter((s) => s.type === rule.to);
    if (!candidates.length) {
      this.openSockets.splice(targetIndex, 1);
      return false;
    }

    for (let attempt = 0; attempt < maxTries; attempt++) {
      const socket = candidates[Math.floor(this.rng() * candidates.length)];

      const targetDir = target.worldNormal.clone().multiplyScalar(-1).normalize();
      const baseQuat = tmpQuat.setFromUnitVectors(socket.normal, targetDir);
      // Allow up to 90° in-plane twist to align bricks in cardinal orientations.
      const twistChoices = [0, Math.PI / 2, -Math.PI / 2];
      const twist = twistChoices[Math.floor(this.rng() * twistChoices.length)];
      const twistQuat = new THREE.Quaternion().setFromAxisAngle(targetDir, twist);
      const finalQuat = baseQuat.clone().multiply(twistQuat);

      // Minimal tilt (disabled) to keep placements stable.
      const tiltMax = 0; // hard anchor, no extra tilt
      if (tiltMax > 0) {
        const randAxis = new THREE.Vector3(this.rng() - 0.5, this.rng() - 0.5, this.rng() - 0.5);
        if (randAxis.lengthSq() < 1e-4 || Math.abs(randAxis.normalize().dot(targetDir)) > 0.95) {
          randAxis.set(1, 0, 0);
        }
        const tiltQuat = new THREE.Quaternion().setFromAxisAngle(randAxis, (this.rng() - 0.5) * tiltMax);
        finalQuat.multiply(tiltQuat);
      }

      const rotatedSocketPos = socket.position.clone().applyQuaternion(finalQuat);
      const translation = target.worldPosition.clone().sub(rotatedSocketPos);

      // Optional half-offset rule: shift by half a brick footprint in X or Y (world-aligned with rotation).
      if (rule.anchor === "A" || rule.anchor === "B") {
        // Offset using anchor as control point (true attach reference, like Wasp rules).
        const anchor = rule.anchor === "A" ? this.anchorA : this.anchorB;
        const axisX = new THREE.Vector3(1, 0, 0).applyQuaternion(finalQuat).normalize();
        const axisY = new THREE.Vector3(0, 1, 0).applyQuaternion(finalQuat).normalize();
        const offsetX = axisX.multiplyScalar(anchor.x);
        const offsetY = Math.abs(anchor.y) > 0.0001 ? axisY.multiplyScalar(anchor.y) : new THREE.Vector3(0, 0, 0);
        translation.add(offsetX).add(offsetY);
      }


      const matrix = new THREE.Matrix4().compose(translation, finalQuat, new THREE.Vector3(1, 1, 1));
      // Keep a configurable positive margin to prevent overlap in packing.
      const candidateBox = this.baseBoundingBox
        .clone()
        .applyMatrix4(matrix)
        .expandByScalar(this.collisionMargin);

      // Reject if dipping below ground plane
      if (candidateBox.min.z < 0) {
        this.openSockets.splice(targetIndex, 1);
        return false;
      }

      let collides = false;
      for (const inst of this.instances) {
        if (boxesIntersectLoose(candidateBox, inst.bbox)) {
          collides = true;
          break;
        }
      }
      if (collides) continue;

      // Placement accepted; remove the target socket to avoid reuse.
      this.openSockets.splice(targetIndex, 1);

      this.addInstance(matrix, { isBase: false, skipSocketId: socket.id });
      return true;
    }

    // Could not place on this socket; drop it so we don't get stuck.
    this.openSockets.splice(targetIndex, 1);
    return false;
  }

  aggregate({ count = 40, maxAttemptsPerSocket = 48, verticalBias = 0.85 } = {}) {
    let placed = 0;
    while (placed < count && this.openSockets.length > 0) {
      // Bias toward upward sockets to grow vertically, but allow bottom sockets for bridging.
      const upward = [];
      const other = [];
      this.openSockets.forEach((s, idx) => {
        if (s.worldNormal.z > 0.5) upward.push(idx);
        else other.push(idx);
      });
      let pickIndex;
      if (upward.length && other.length) {
        if (this.rng() < verticalBias) {
          pickIndex = upward[Math.floor(this.rng() * upward.length)];
        } else {
          pickIndex = other[Math.floor(this.rng() * other.length)];
        }
      } else {
        pickIndex = Math.floor(this.rng() * this.openSockets.length);
      }
      const success = this.tryAttach(pickIndex, maxAttemptsPerSocket);
      if (success) {
        placed += 1;
      }
      // If failed, try next socket (handled inside tryAttach when removing sockets)
    }
    return { placed, remainingSockets: this.openSockets.length, totalInstances: this.instances.length };
  }

  // Simple settle: drop non-base instances straight down until they rest on the ground or supporting boxes (no dynamics).
  settleInstances(enable = false) {
    if (!enable) return;
    const overlaps2D = (a, b) =>
      !(
        a.max.x <= b.min.x + EPS ||
        a.min.x >= b.max.x - EPS ||
        a.max.y <= b.min.y + EPS ||
        a.min.y >= b.max.y - EPS
      );

    const staticSupports = this.instances
      .filter((inst) => inst.isBase)
      .map((inst) => ({ bbox: inst.bbox.clone() }));

    const movable = this.instances
      .filter((inst) => !inst.isBase)
      .sort((a, b) => a.bbox.min.z - b.bbox.min.z);

    const settled = [...staticSupports];

    for (const inst of movable) {
      // Recompute bbox from current matrix to avoid drift.
      let bbox = this.baseBoundingBox.clone().applyMatrix4(inst.matrix);
      let targetMinZ = 0;
      for (const support of settled) {
        if (!overlaps2D(bbox, support.bbox)) continue;
        targetMinZ = Math.max(targetMinZ, support.bbox.max.z);
      }
      const delta = targetMinZ - bbox.min.z;
      if (Math.abs(delta) > EPS) {
        inst.matrix = inst.matrix.clone();
        inst.matrix.elements[14] += delta;
        inst.mesh.matrix.copy(inst.matrix);
        inst.mesh.updateMatrixWorld(true);
        bbox.translate(new THREE.Vector3(0, 0, delta));
      }
      inst.bbox = bbox;
      settled.push({ bbox });
    }
  }
}

export function exportGroupAsGLB(group, onProgress) {
  const exporter = new GLTFExporter();
  const exportRoot = group.clone(true);
  exportRoot.updateMatrixWorld(true);

  // Apply unit scaling (0.1) and rotate from Three.js Y-up to Rhino Z-up (Y -> Z, Z -> -Y).
  const scale = new THREE.Matrix4().makeScale(0.1, 0.1, 0.1);
  const rhinoTransform = new THREE.Matrix4().makeRotationX(-Math.PI / 2);
  exportRoot.applyMatrix4(scale);
  exportRoot.applyMatrix4(rhinoTransform);
  exportRoot.updateMatrixWorld(true);

  return new Promise((resolve, reject) => {
    exporter.parse(
      exportRoot,
      (result) => {
        if (result instanceof ArrayBuffer) {
          resolve(new Blob([result], { type: "model/gltf-binary" }));
        } else {
          const json = JSON.stringify(result);
          resolve(new Blob([json], { type: "model/gltf+json" }));
        }
      },
      (error) => reject(error),
      { binary: true },
      (progress) => onProgress?.(progress)
    );
  });
}
