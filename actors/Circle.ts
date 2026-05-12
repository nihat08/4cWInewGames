import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";


export class Circle extends AbstractActor {
    

    constructor(
        protected movement: MoveStrategy,
        public radius: number
    ) 
    {
        super(movement);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

}