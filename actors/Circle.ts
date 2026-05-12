import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";


export class Circle implements Actor {
    

    constructor(
        private movement: MoveStrategy,
        public radius: number
    ) 
    {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.movement.update(deltaTime, this.movement.getX());
    }
}