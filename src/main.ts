import { Container, Application, ApplicationOptions, Sprite, Graphics } from 'pixi.js';

// Custom classes
export default class Circle extends Sprite {

    graphics: Graphics;

    constructor() { 
        super();

        this.graphics = new Graphics();
        this.graphics.beginFill(0xF00d0F, 0.7);
        this.graphics.drawCircle(100, 100, 20);

        this.addChild(this.graphics);
    }
} 

new class Main {
    app: Application;

    settings: ApplicationOptions = {
        backgroundColor: 0xFFFFFF,
        antialias: true
    };

    constructor() {
        this.app = new Application(window.innerWidth, window.innerHeight, this.settings);
        document.body.appendChild(this.app.view);

        let circle: Circle = new Circle();
        this.app.stage.addChild(circle);

        // Animation loop
        this.app.ticker.add((delta) => {
            circle.position.x += 3;
            circle.position.y += 0; 
            console.log("YEAH!")
        });
    }
}