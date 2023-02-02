import * as THREE from "three";
import { EventEmitter } from "events";

import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Van from "./Van";
import Floor from "./Floor";

export default class World extends EventEmitter{
    constructor() {
        super()
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        
        // this.floor - new Floor();
        // this.van = new Van();

        this.resources.on("ready", () => {
            this.environment = new Environment();
            this.floor = new Floor();
            this.van = new Van();
            // this.controls = new Controls();
            this.emit("worldready");
        });

        
    }

    resize() {
        
    }

    update() {
       
    }

}