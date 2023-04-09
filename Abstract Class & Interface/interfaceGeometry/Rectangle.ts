import {Shape} from "./Shape";
import {Resizeable} from "./Resizeable";

export class Rectangle extends Shape implements Resizeable {
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }

    resize(n: number) {
        this.height += n
        this.width += n
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}