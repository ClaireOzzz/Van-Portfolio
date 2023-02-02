import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor{
    constructor() {
        this.experience = new Experience(); 
        this.scene = this.experience.scene;
       
        this.setFloor();
        
    }

    setFloor() {
        // this.plane = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 100, 100),
        //     new THREE.MeshStandardMaterial({ color: 000000 })
        //   );
        // this.plane = new THREE.Mesh(this.geometry, this.material);
       
        // this.plane.rotation.x = Math.PI / 2;
        // this.plane.position.y = 0;
        // this.plane.receiveShadow = true;
        // this.scene.add(this.plane);
        // console.log(this.plane.position);

        this.geometry = new THREE.BoxGeometry(100,1,100);
        this.material = new THREE.MeshBasicMaterial({ color: "white" });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.cube.receiveShadow = true;
        
        this.cube.position.y = -1.3;
        this.scene.add(this.cube);
        console.log(this.cube);
    }

    resize() {
        
    }

    update() {
       
    }

}