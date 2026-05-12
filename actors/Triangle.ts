import { Actor } from "./Actor";
import { MoveStrategy } from "../movements/MoveStrategy";

export class Triangle implements Actor {
    constructor(
        private movement: MoveStrategy,
        public size: number) 
    {}
    
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.movement.getX(), this.movement.getY());
        ctx.lineTo(this.movement.getX() + this.size / 2, this.movement.getY() + this.size);
        ctx.lineTo(this.movement.getX() - this.size / 2, this.movement.getY() + this.size);
        ctx.closePath();
        ctx.fill();
    }

    update(deltaTime: number): void {
        this.movement.update(deltaTime, this.movement.getX());
    }

}
