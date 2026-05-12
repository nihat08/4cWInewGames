export class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    render(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update(deltaTime) {
        this.x -= 50 * deltaTime; // Move rectangle to the right
        this.y -= 30 * deltaTime; // Move rectangle downwards
    }
}
