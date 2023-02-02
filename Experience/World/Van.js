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

        this.setModel();
    }

    setModel() {
        this.actualVan.receiveShadow = true;
        this.actualVan.castShadow = true;
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
        this.actualVan.scale.set( 1.1, 1.1, 1.1 );
        this.scene.add(this.actualVan)
        this.actualVan.position.y = -0.9;
        this.actualVan.rotation.y = Math.PI / 4;

        
    }


    resize() {
        
    }

    update() {
       
    }

}