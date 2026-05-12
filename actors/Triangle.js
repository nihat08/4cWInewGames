export class Triangle {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }
    render(ctx) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size);
        ctx.closePath();
        ctx.fill();
    }
    update(deltaTime) {
        this.x -= 50 * deltaTime; // Move triangle to the right
        this.y += 30 * deltaTime; // Move triangle downwards
    }
}
