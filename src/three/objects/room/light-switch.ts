import { BoxGeometry, Mesh, MeshBasicMaterial, Group, Box3 } from "three";
import { room } from ".";
import { raycast } from "../../utils/raycast";
import { playSound } from "../../../features/sounds/utils/sounds";
import { resources } from "../../../utils/resources";
import { getRoomMaterial } from "../../common/materials";
import gsap from "gsap";
import { Vector3 } from "three";

import type { BufferGeometry, Material } from "three";

let group: Group | null = null;
let isDarkMode = false;
let clickableSwitch: any = null;
let toggle: Mesh | null = null;
const geometries: BufferGeometry[] = [];
const materials: Material[] = [];

const init = () => {
  if (group) return;

  group = new Group();

  const baseGeometry = new BoxGeometry(0.3, 0.4, 0.05);
  const baseMaterial = new MeshBasicMaterial({ color: 0xcfbfa8 });
  geometries.push(baseGeometry);
  materials.push(baseMaterial);
  const base = new Mesh(baseGeometry, baseMaterial);

  const toggleGeometry = new BoxGeometry(0.18, 0.28, 0.04);
  const toggleMaterial = new MeshBasicMaterial({ color: 0xe8ddd0 });
  geometries.push(toggleGeometry);
  materials.push(toggleMaterial);
  toggle = new Mesh(toggleGeometry, toggleMaterial);
  toggle.position.z = 0.045;
  // Start in "light on" position — top of rocker pressed in
  toggle.rotation.x = -Math.PI / 8;

  group.add(base);
  group.add(toggle);

  const resource = resources.items["room-model"];
  const frameMesh = resource.scene.children.find((child: any) => child.name === "frame");

  if (frameMesh) {
    frameMesh.geometry.computeBoundingBox();
    const center = new Vector3();
    frameMesh.geometry.boundingBox.getCenter(center);
    group.position.copy(center);
    group.position.y += 0.8;
  } else {
    group.position.set(0, 4, 1.5);
  }

  group.rotation.y = Math.PI / 2;

  room.group.add(group);

  const boundingBox = new Box3().setFromObject(group);
  clickableSwitch = Object.assign(boundingBox, {
    onClick: () => {
      toggleDarkMode();
      if (toggle) {
        gsap.to(toggle.rotation, {
          x: isDarkMode ? Math.PI / 8 : -Math.PI / 8,
          duration: 0.15,
          ease: "power2.out",
        });
      }
    },
    hoverSound: "buttonHover",
  });

  raycast.boxesToCheck.push(clickableSwitch);
};

const tick = () => {
  if (group && clickableSwitch) {
    clickableSwitch.setFromObject(group);
    clickableSwitch.expandByScalar(0.1);
  }
};

const toggleDarkMode = () => {
  isDarkMode = !isDarkMode;
  playSound("click");

  document.documentElement.classList.toggle("dark", isDarkMode);

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
  geometries.forEach((g) => g.dispose());
  geometries.length = 0;
  materials.forEach((m) => m.dispose());
  materials.length = 0;
  toggle = null;
  group = null;
};

export const lightSwitch = { init, tick, destroy };
