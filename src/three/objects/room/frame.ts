import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { resources } from "../../../utils/resources";

const init = (targetFrame: Mesh) => {
  const texture = resources.items["profile-texture"];
  if (!texture) return;

  // Fix orientation for our clean plane
  texture.flipY = false;
  texture.center.set(0.5, 0.5);
  texture.rotation = Math.PI / 2; // Fixed rotation direction

  // Create a clean material for the photo
  const material = new MeshBasicMaterial({ 
    map: texture,
    side: DoubleSide
  });

  // Create a clean plane geometry
  const geometry = new PlaneGeometry(1, 1);
  const photoMesh = new Mesh(geometry, material);

  // Add a border frame
  const borderGeometry = new PlaneGeometry(1.05, 1.05); // 5% larger for the border
  const borderMaterial = new MeshBasicMaterial({ color: 0xffffff }); // Professional white border
  const borderMesh = new Mesh(borderGeometry, borderMaterial);
  borderMesh.position.z = -0.01; // Place slightly behind the photo
  photoMesh.add(borderMesh);

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
    const width = size.z;
    const height = size.y;
    photoMesh.scale.set(width, height, 1);
    
    // Face the room center and apply anticlockwise rotation as requested
    photoMesh.rotation.y = Math.PI / 2;
    photoMesh.rotation.z = Math.PI / 2; // Anticlockwise rotation
  }

  // Increased offset to 0.02 to clear the "black spot" and prevent z-fighting
  photoMesh.position.x += 0.02; 

  // Add the photo mesh to the target frame
  targetFrame.add(photoMesh);

  // Hide the original frame material to remove unwanted details like the black spot
  if (targetFrame.material) {
    if (Array.isArray(targetFrame.material)) {
      targetFrame.material.forEach(m => m.visible = false);
    } else {
      targetFrame.material.visible = false;
    }
  }
};

export const frame = { init };
