export class Triangle {
    constructor(movement, size) {
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
    update(deltaTime) {
        this.movement.update(deltaTime, this.movement.getX());
    }
}
