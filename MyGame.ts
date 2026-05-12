// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Triangle } from "./actors/Triangle.js";
import { Actor } from "./actors/Actor.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { MoveStrategy } from "./movements/MoveStrategy.js";

class MyGame extends Game {
  private actors: Actor[] = [];

  init(): void { 
    console.log("Game started!");

    this.actors.push(new Rectangle(new LeftMovement(200, 100, 40), 100, 50));
    this.actors.push(new Rectangle(new RightMovement(400, 100, 50), 50, 50));
    this.actors.push(new Rectangle(new RightMovement(350, 200, 80), 75, 75));

    this.actors.push(new Circle(new RightMovement(100, 100, 50), 50));
    this.actors.push(new Circle(new LeftMovement(300, 150, 20), 40));
    this.actors.push(new Circle(new RightMovement(500, 200, 80), 30));

    this.actors.push(new Triangle(new LeftMovement(200, 400, 40), 50));
    this.actors.push(new Triangle(new RightMovement(400, 450, 50), 60));
    this.actors.push(new Triangle(new RightMovement(600, 500, 80), 40));
  }

  update(deltaTime: number): void {
    this.actors.forEach(actor => actor.update(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach(actor => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
