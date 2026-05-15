import { DoubleSide, Mesh, MeshBasicMaterial, BufferAttribute } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for this specific mesh
  texture.flipY = false;
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI;

  // Create a new material for the photo
  const material = new MeshBasicMaterial({ 
    map: texture,
    side: DoubleSide
  });

  // Override UVs to map the texture correctly to the whole mesh
  const uvAttribute = targetFrame.geometry.getAttribute("uv");
  if (uvAttribute) {
    const uvs = new Float32Array([
      0, 1,
      1, 1,
      0, 0,
      1, 0
    ]);
    targetFrame.geometry.setAttribute("uv", new BufferAttribute(uvs, 2));
    uvAttribute.needsUpdate = true;
  }

  targetFrame.material = material;
};

export const frame = { init };
