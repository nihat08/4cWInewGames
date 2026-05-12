export class Circle {
    constructor(movement, radius) {
        this.movement = movement;
        this.radius = radius;
    }
    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.movement.update(deltaTime, this.movement.getX());
    }
}
