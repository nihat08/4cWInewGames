export class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    render(ctx) {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(deltaTime) {
        this.x += 50 * deltaTime; // Move circle to the right
        this.y += 30 * deltaTime; // Move circle downwards
    }
}
