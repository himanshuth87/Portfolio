import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for our clean plane
  texture.flipY = false;
  texture.center.set(0.5, 0.5);
  texture.rotation = -Math.PI / 2; // Rotate to fix the sideways appearance

  // Create a clean material for the photo
  const material = new MeshBasicMaterial({ 
    map: texture,
    side: DoubleSide
  });

  // Create a clean plane geometry
  const geometry = new PlaneGeometry(1, 1);
  const photoMesh = new Mesh(geometry, material);

  // Calculate size and center from targetFrame bounding box
  targetFrame.geometry.computeBoundingBox();
  const box = targetFrame.geometry.boundingBox;
  
  if (box) {
    const size = new Vector3();
    const center = new Vector3();
    box.getSize(size);
    box.getCenter(center);
    
    // Position the photo at the center of the tablet mesh
    photoMesh.position.copy(center);
    
    // Scale it to match the tablet's dimensions
    // For a tablet on the right wall, Y is height and Z is width
    const width = size.z;
    const height = size.y;
    photoMesh.scale.set(width, height, 1);
    
    // Face the room center (out of the right wall)
    photoMesh.rotation.y = Math.PI / 2;
  }

  // Tiny offset to prevent z-fighting
  photoMesh.position.x += 0.01; 

  // Add the photo mesh to the target frame
  targetFrame.add(photoMesh);
};

export const frame = { init };
