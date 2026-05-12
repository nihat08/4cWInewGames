import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";

export abstract class AbstractActor implements Actor {
    abstract render(ctx: CanvasRenderingContext2D): void;

    constructor(protected movement: MoveStrategy) {}


    update(deltaTime: number): void {
        this.movement.update(deltaTime, this.movement.getX());
    }
}          