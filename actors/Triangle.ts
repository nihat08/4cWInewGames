import { Actor } from "./Actor";

export class Triangle implements Actor {
    constructor(
        public x: number, 
        public y: number, 
        public size: number) 
    {}
    
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size);
        ctx.closePath();
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.x -= 50 * deltaTime;   // Move triangle to the right
        this.y += 30 * deltaTime;   // Move triangle downwards
    }

}
