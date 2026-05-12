// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Triangle } from "./actors/Triangle.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        console.log("Game started!");
        this.actors.push(new Rectangle(100, 100, 50, 50));
        this.actors.push(new Rectangle(300, 150, 100, 50));
        this.actors.push(new Rectangle(500, 200, 75, 75));
        this.actors.push(new Circle(200, 200, 25));
        this.actors.push(new Circle(400, 250, 40));
        this.actors.push(new Circle(600, 300, 30));
        this.actors.push(new Triangle(200, 400, 50));
        this.actors.push(new Triangle(400, 450, 60));
        this.actors.push(new Triangle(600, 500, 40));
    }
    update(deltaTime) {
        this.actors.forEach(actor => actor.update(deltaTime));
    }
    render(ctx) {
        this.actors.forEach(actor => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
