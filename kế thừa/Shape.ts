interface calculate {
    getArea():number

    getPerimeter():number



}

class Shape {
    private _color: string = "red";
    private _filled: boolean = true

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }

    toString() {
        console.log("-color: " + this._color)
        if (this.filled) {
            console.log("- filled")
        }
        else {
            console.log("- not filled")
        }
    }
}

class Circle extends Shape implements calculate {
    private _radius: number = 1

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;

    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;

    }


    toString() {
        super.toString();
        console.log(" radius: " + this._radius)
        console.log("- arena : " + this.getArea())
        console.log("- Perimeter: " + this.getPerimeter())
    }
}

class Rectangle extends Shape implements calculate {
    private _width: number = 1
    private _lenght: number = 1

    constructor(color: string, filled: boolean, width: number, lenght: number) {
        super(color, filled);
        this._width = width;
        this._lenght = lenght;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get lenght(): number {
        return this._lenght;
    }

    set lenght(value: number) {
        this._lenght = value;
    }

    getArea() {
        return this._width * this._lenght;

    }

    getPerimeter() {
        return (this._lenght + this._width) * 2
    }

    toString() {
        super.toString();
        console.log("- width: " + this._width)
        console.log("- lenght: " + this._lenght)
        console.log("- arena : " + this.getArea())
        console.log("- Perimeter: " + this.getPerimeter())
    }
}

class Square extends Rectangle {

    private _side: number = 2

    constructor(color: string, filled: boolean, side: number) {
        super(color, filled, side,side);
        this._side = side;
    }

    get side(): number {
        return this._side;
    }

    set side(value: number) {
        this._side = value;
    }

    set width(side:number) {
        this.width = side
    }

    set length(side:number) {
        this.lenght = side
    }

    toString() {
        super.toString();
        console.log("- side: " + this._side)
    }
}

let shape = new Shape("red",true)
let circle = new Circle("red",true,10)
let rectangle = new Rectangle("tím", false , 10, 20)
let square = new Square("blue",true,10,)
console.log("circle")
circle.toString()
console.log("rectangle")
rectangle.toString()
console.log("square")
square.toString()
