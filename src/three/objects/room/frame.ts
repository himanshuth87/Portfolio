import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for our clean plane
  texture.flipY = false;
  texture.rotation = 0;
  texture.center.set(0.5, 0.5);

  // Create a new material for the photo - using Red for debugging visibility
  const material = new MeshBasicMaterial({ 
    map: texture,
    color: 0xff0000, // Red tint to see the plane even if texture fails
    side: DoubleSide
  });

  // Create a clean plane geometry
  const geometry = new PlaneGeometry(1, 1);
  const photoMesh = new Mesh(geometry, material);

  // Calculate size from targetFrame bounding box
  targetFrame.geometry.computeBoundingBox();
  const box = targetFrame.geometry.boundingBox;
  if (box) {
    const size = new Vector3();
    box.getSize(size);
    photoMesh.scale.set(size.x || 0.5, size.y || 0.5, 1);
  }

  // Increase offset significantly for debugging
  photoMesh.position.z = 0.05;

  // Add the photo mesh to the target frame
  targetFrame.add(photoMesh);
};

export const frame = { init };
