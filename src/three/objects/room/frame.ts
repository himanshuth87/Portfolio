import { Mesh, MeshBasicMaterial } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Re-adjust orientation for this specific mesh
  texture.flipY = true;
  texture.rotation = 0;

  // Create a new material for the photo
  const material = new MeshBasicMaterial({ map: texture });

  // For now, let's try replacing the material of the frame mesh
  targetFrame.material = material;
};

export const frame = { init };
