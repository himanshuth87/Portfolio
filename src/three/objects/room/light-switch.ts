import { BoxGeometry, Mesh, MeshBasicMaterial, Group, Box3 } from "three";
import { room } from ".";
import { raycast } from "../../utils/raycast";
import { playSound } from "../../../features/sounds/utils/sounds";
import { getRoomMaterial } from "../../common/materials";
import gsap from "gsap";

let group: Group | null = null;
let isDarkMode = false;
let clickableSwitch: any = null;

const init = () => {
  if (group) return;

  group = new Group();

  // Create switch base
  const baseGeometry = new BoxGeometry(0.12, 0.18, 0.02);
  const baseMaterial = new MeshBasicMaterial({ color: 0xcccccc });
  const base = new Mesh(baseGeometry, baseMaterial);

  // Create actual toggle
  const toggleGeometry = new BoxGeometry(0.04, 0.08, 0.03);
  const toggleMaterial = new MeshBasicMaterial({ color: 0xffffff });
  const toggle = new Mesh(toggleGeometry, toggleMaterial);
  toggle.position.z = 0.015;

  group.add(base);
  group.add(toggle);

  // Final position on the back wall, slightly to the left of the blackboard
  group.position.set(-1.8, 3.8, 1.2);
  group.rotation.y = 0; 

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

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  playSound("click");

  const mat = getRoomMaterial() as MeshBasicMaterial;
  gsap.to(mat.color, {
    r: isDarkMode ? 0.2 : 1,
    g: isDarkMode ? 0.2 : 1,
    b: isDarkMode ? 0.2 : 1,
    duration: 0.8,
    ease: "power2.inOut",
  });
};

const destroy = () => {
  if (clickableSwitch) {
    const index = raycast.boxesToCheck.indexOf(clickableSwitch);
    if (index !== -1) raycast.boxesToCheck.splice(index, 1);
    clickableSwitch = null;
  }
  group = null;
};

export const lightSwitch = { init, destroy };
