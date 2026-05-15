import { BoxGeometry, Mesh, MeshBasicMaterial, Group, Box3, Vector3 } from "three";
import { room } from ".";
import { raycast } from "../../utils/raycast";
import { playSound } from "../../../features/sounds/utils/sounds";
import { resources } from "../../../utils/resources";
import { getRoomMaterial } from "../../common/materials";
import gsap from "gsap";

let group: Group | null = null;
let isDarkMode = false;
let clickableSwitch: any = null;

const init = () => {
  if (group) return;

  group = new Group();

  // Create switch base - Large and Red for debugging
  const baseGeometry = new BoxGeometry(0.3, 0.4, 0.05);
  const baseMaterial = new MeshBasicMaterial({ color: 0xff0000 });
  const base = new Mesh(baseGeometry, baseMaterial);

  // Create actual toggle
  const toggleGeometry = new BoxGeometry(0.1, 0.2, 0.1);
  const toggleMaterial = new MeshBasicMaterial({ color: 0xffff00 });
  const toggle = new Mesh(toggleGeometry, toggleMaterial);
  toggle.position.z = 0.05;

  group.add(base);
  group.add(toggle);

  // Find the 'frame' (tablet) to use as a reference
  const resource = resources.items["room-model"];
  const frameMesh = resource.scene.children.find((child: any) => child.name === "frame");
  
  if (frameMesh) {
    frameMesh.geometry.computeBoundingBox();
    const center = new Vector3();
    frameMesh.geometry.boundingBox.getCenter(center);
    
    // Position it slightly above the tablet
    group.position.copy(center);
    group.position.y += 0.8;
  } else {
    // Fallback if frame is not found
    group.position.set(0, 4, 1.5);
  }

  group.rotation.y = Math.PI / 2; // Face out from the wall

  room.group.add(group);

  // Raycast setup
  const boundingBox = new Box3().setFromObject(group);
  clickableSwitch = Object.assign(boundingBox, {
    onClick: () => {
      toggleDarkMode();
      // Visual feedback for toggle
      gsap.to(toggle.position, {
        y: isDarkMode ? -0.02 : 0.02,
        duration: 0.2,
      });
    },
    hoverSound: "buttonHover",
  });

  raycast.boxesToCheck.push(clickableSwitch);
};

const tick = () => {
  if (group && clickableSwitch) {
    clickableSwitch.setFromObject(group);
    clickableSwitch.expandByScalar(0.1); // Make it easier to click
  }
};

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  console.log("Light switch toggled. Dark Mode:", isDarkMode);
  playSound("click");

  const mat = getRoomMaterial() as MeshBasicMaterial;
  if (mat) {
    gsap.to(mat.color, {
      r: isDarkMode ? 0.2 : 1,
      g: isDarkMode ? 0.2 : 1,
      b: isDarkMode ? 0.2 : 1,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }
};

const destroy = () => {
  if (clickableSwitch) {
    const index = raycast.boxesToCheck.indexOf(clickableSwitch);
    if (index !== -1) raycast.boxesToCheck.splice(index, 1);
    clickableSwitch = null;
  }
  group = null;
};

export const lightSwitch = { init, tick, destroy };
