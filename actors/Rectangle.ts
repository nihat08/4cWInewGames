import { Actor } from "./Actor.js";

export class Rectangle implements Actor {
    constructor(
        public x: number, 
        public y: number, 
        public width: number, 
        public height: number) 
    {}

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    update(deltaTime: number): void {
        this.x -= 50 * deltaTime; // Move rectangle to the right
        this.y -= 30 * deltaTime; // Move rectangle downwards
    }
}