export class Rectangle {
    constructor(movement, width, height) {
        this.movement = movement;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
    }
    update(deltaTime) {
        this.movement.update(deltaTime, this.movement.getX());
    }
}
