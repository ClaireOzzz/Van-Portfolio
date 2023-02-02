import * as THREE from "three";
import Experience from "../Experience.js";
// import GSAP from "gsap";
//import GUI from "lil-gui";

export default class Environment {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;

        // this.gui = new GUI({ container: document.querySelector(".hero-main") });
        this.obj = {
            colorObj: { r: 0, g: 0, b: 0 },
            intensity: 3,
        };

        this.setSunlight();
    
    }


    setSunlight() {

        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.frontLight = new THREE.PointLight(0xffffff, 0.8);
        this.backLight = new THREE.PointLight(0xffffff, 0.8);
        this.frontLight.castShadow = true;
        this.frontLight.shadow.mapSize.width = 1024;
        this.frontLight.shadow.mapSize.height = 1024;
        this.backLight.castShadow = true;
        this.backLight.shadow.mapSize.width = 1024;
        this.backLight.shadow.mapSize.height = 1024;
        this.frontLight.position.set(20, 20, 20);
        this.backLight.position.set(-20, -20, 20);
        this.scene.add(this.frontLight);
        this.scene.add(this.backLight);
        this.scene.add(this.ambientLight);
    }

// switchTheme(theme) {
//   console.log(this.sunLight);
//   if (theme === "dark") {
//       GSAP.to(this.sunLight.color, {
//           r: 0.17254901960784313,
//           g: 0.23137254901960785,
//           b: 0.6862745098039216,
//       });
//       GSAP.to(this.ambientLight.color, {
//           r: 0.17254901960784313,
//           g: 0.23137254901960785,
//           b: 0.6862745098039216,
//       });
//       GSAP.to(this.sunLight, {
//           intensity: 0.78,
//       });
//       GSAP.to(this.ambientLight, {
//           intensity: 0.78,
//       });
//   } else {
//       GSAP.to(this.sunLight.color, {
//           r: 255 / 255,
//           g: 255 / 255,
//           b: 255 / 255,
//       });
//       GSAP.to(this.ambientLight.color, {
//           r: 255 / 255,
//           g: 255 / 255,
//           b: 255 / 255,
//       });
//       GSAP.to(this.sunLight, {
//           intensity: 3,
//       });
//       GSAP.to(this.ambientLight, {
//           intensity: 1,
//       });
//   }
// }

    resize() {}

    update() {}
}