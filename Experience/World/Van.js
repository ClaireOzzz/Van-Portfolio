import * as THREE from "three";
import Experience from "../Experience.js";

export default class Van{
    constructor() {
        this.experience = new Experience(); 
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.van = this.resources.items.van; //Van comes from items, items which looks at assets.name
        this.actualVan = this.van.scene; //does not contain animatons, only meshes
       
        this.vanChildren = {};

        this.setModel();
        this.setAnimation();
    }

    setModel() {
        this.actualVan.receiveShadow = true;
        this.actualVan.castShadow = true;
        this.actualVan.traverse((actualVan) => {
            if (actualVan.isMesh) {
                actualVan.castShadow = actualVan.receiveShadow = true;
            }
          });
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

    setAnimation() {
        this.mixer0 = new THREE.AnimationMixer(this.actualVan);
        this.noise = this.mixer0.clipAction(this.van.animations[0]);
        this.mixer1 = new THREE.AnimationMixer(this.actualVan);
        this.wheels = this.mixer1.clipAction(this.van.animations[1]);
        this.noise.play();
        this.wheels.play();
    }


    resize() {
        
    }

    update() {
        this.mixer0.update(this.time.delta * 0.0009);
        this.mixer1.update(this.time.delta * 0.0009);
    }

}