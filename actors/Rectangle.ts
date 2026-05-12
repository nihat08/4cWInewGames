import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export class Rectangle implements Actor {
    constructor(
        private movement: MoveStrategy,
        public width: number, 
        public height: number) 
    {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "red";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }

    update(deltaTime: number): void {
        this.movement.update(deltaTime, this.movement.getX());
    }
}