import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";

export class Rectangle extends AbstractActor {
    constructor(
        protected movement: MoveStrategy,
        public width: number, 
        public height: number) 
    {
        super(movement);
    }

    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "red";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }

    
}