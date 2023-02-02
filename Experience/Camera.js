import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        
        this.createPerspectiveCamera();
    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            50,
            this.sizes.aspect,
            0.1,
            1000
          );
        this.scene.add(this.perspectiveCamera);

        this.perspectiveCamera.position.z = 10;
        this.perspectiveCamera.position.y = 4.65;
        this.perspectiveCamera.rotation.x = -Math.PI / 6;
        
    }

    resize() {
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }

    update() {

    }

}