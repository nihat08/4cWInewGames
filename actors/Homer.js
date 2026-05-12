import { AbstractActor } from "./AbstractActor.js";
export class Homer extends AbstractActor {
    constructor(movement, radius) {
        super(movement);
        this.movement = movement;
        this.radius = radius;
    }
    render(ctx) {
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
