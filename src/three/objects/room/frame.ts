import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { resources } from "../../../utils/resources";

import type { BufferGeometry, Material } from "three";

const geometries: BufferGeometry[] = [];
const materials: Material[] = [];

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  texture.flipY = false;
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI / 2;

  const photoMaterial = new MeshBasicMaterial({ map: texture, side: DoubleSide });
  const photoGeometry = new PlaneGeometry(1, 1);
  geometries.push(photoGeometry);
  materials.push(photoMaterial);

  const photoMesh = new Mesh(photoGeometry, photoMaterial);

  // Border sits behind the photo — the 5% overhang shows as a white frame ring
  const borderGeometry = new PlaneGeometry(1.05, 1.05);
  const borderMaterial = new MeshBasicMaterial({ color: 0xffffff });
  geometries.push(borderGeometry);
  materials.push(borderMaterial);

  const borderMesh = new Mesh(borderGeometry, borderMaterial);
  borderMesh.position.z = -0.005;
  photoMesh.add(borderMesh);

  targetFrame.geometry.computeBoundingBox();
  const box = targetFrame.geometry.boundingBox;

  if (box) {
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);

    photoMesh.position.copy(center);
    photoMesh.scale.set(size.z, size.y, 1);
    photoMesh.rotation.y = Math.PI / 2;
    photoMesh.rotation.z = Math.PI / 2;
  }

  // Offset to prevent z-fighting with the frame mesh surface
  photoMesh.position.x += 0.02;

  targetFrame.add(photoMesh);

  // Hide the original baked frame material — the white border replaces it
  if (targetFrame.material) {
    if (Array.isArray(targetFrame.material)) {
      targetFrame.material.forEach((m) => (m.visible = false));
    } else {
      (targetFrame.material as Material & { visible: boolean }).visible = false;
    }
  }
};

const destroy = () => {
  geometries.forEach((g) => g.dispose());
  geometries.length = 0;
  materials.forEach((m) => m.dispose());
  materials.length = 0;
};

export const frame = { init, destroy };
