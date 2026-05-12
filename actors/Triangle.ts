import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";

export class Triangle extends AbstractActor {
    constructor(
        protected movement: MoveStrategy,
        public size: number) 
    {
        super(movement);
    }
    
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.movement.getX(), this.movement.getY());
        ctx.lineTo(this.movement.getX() + this.size / 2, this.movement.getY() + this.size);
        ctx.lineTo(this.movement.getX() - this.size / 2, this.movement.getY() + this.size);
        ctx.closePath();
        ctx.fill();
    }

}
