import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for our clean plane
  texture.flipY = false;
  texture.rotation = 0;
  texture.center.set(0.5, 0.5);

  // Create a new material for the photo
  const material = new MeshBasicMaterial({ 
    map: texture,
    side: DoubleSide
  });

  // Create a clean plane geometry that we have 100% control over
  const geometry = new PlaneGeometry(1, 1);
  const photoMesh = new Mesh(geometry, material);

  // Calculate size from targetFrame bounding box to match the frame dimensions
  targetFrame.geometry.computeBoundingBox();
  const box = targetFrame.geometry.boundingBox;
  if (box) {
    const size = new Vector3();
    box.getSize(size);
    
    // Use the largest two dimensions for the plane scale
    photoMesh.scale.set(size.x || 1, size.y || 1, 1);
  }

  // Offset slightly to prevent z-fighting with the original mesh
  photoMesh.position.z = 0.001;

  // Add the photo mesh to the target frame so it follows its transform
  targetFrame.add(photoMesh);

  // Hide the original frame content material
  if (Array.isArray(targetFrame.material)) {
    targetFrame.material.forEach(m => m.visible = false);
  } else {
    targetFrame.material.visible = false;
  }
};

export const frame = { init };
