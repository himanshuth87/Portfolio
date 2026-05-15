import { Mesh, MeshBasicMaterial } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for GLTF models
  texture.flipY = false;
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI;

  // Create a new material for the photo
  const material = new MeshBasicMaterial({ map: texture });

  // For now, let's try replacing the material of the frame mesh
  targetFrame.material = material;
};

export const frame = { init };
