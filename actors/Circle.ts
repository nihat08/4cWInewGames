import { Actor } from "./Actor.js";

export class Circle implements Actor {
    constructor(
        public x: number, 
        public y: number, 
        public radius: number) 
    {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.x += 50 * deltaTime;   // Move circle to the right
        this.y += 30 * deltaTime;   // Move circle downwards
    }
}