class Shape {
    color: string;
    filled: boolean;


    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}

class Circle extends Shape {
    radius: number


    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }

}

class rectangle extends Shape {
    width: number
    length: number

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }

    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}

class Square extends Shape {
    side: number

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled);
        this.side = side;
    }
}

let shape = new Shape("red", false)
let tron = new Circle("red", false, 3.5)
let Rectangle = new rectangle("red", true, 6, 8)
let square = new Square("red", true, 9)
console.table(shape)
console.table(tron)
console.table(Rectangle)
console.table(square)
