import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";

export class Homer extends AbstractActor {
    constructor(
        protected movement: MoveStrategy,
        public radius: number
    ) 
    {
        super(movement);
    }  

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.movement.getX() - this.radius / 3, this.movement.getY() - this.radius / 3, this.radius / 5, 0, Math.PI * 2);
        ctx.arc(this.movement.getX() + this.radius / 3, this.movement.getY() - this.radius / 3, this.radius / 5, 0, Math.PI * 2);
        ctx.fill(); 
    }
}