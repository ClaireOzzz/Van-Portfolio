import * as THREE from "three";
import Experience from "../Experience.js";

export default class Van{
    constructor() {
        this.experience = new Experience(); 
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.van = this.resources.items.van; //Van comes from items, items which looks at assets.name
        this.actualVan = this.van.scene; //does not contain animatons, only meshes
        console.log(this.actualVan);
        this.vanChildren = {};
       
        // const geometry = new THREE.BoxGeometry(1,1,1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // this.scene.add(cube);
        // console.log(cube.position);

        this.setModel();
    }

    setModel() {
        this.actualVan.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
        })
        this.scene.add(this.actualVan)
    }


    resize() {
        
    }

    update() {
       
    }

}