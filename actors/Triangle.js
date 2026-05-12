import { AbstractActor } from "./AbstractActor.js";
export class Triangle extends AbstractActor {
    constructor(movement, size) {
        super(movement);
        this.movement = movement;
        this.size = size;
    }
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.movement.getX(), this.movement.getY());
        ctx.lineTo(this.movement.getX() + this.size / 2, this.movement.getY() + this.size);
        ctx.lineTo(this.movement.getX() - this.size / 2, this.movement.getY() + this.size);
        ctx.closePath();
        ctx.fill();
    }
}
