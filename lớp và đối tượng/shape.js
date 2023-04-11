class Shape {
    color;
    filled;
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }

}
class Circle extends Shape {
    constructor(color, filled,radius) {
        super(color, filled);
        this.radius = radius
    }
    getArea()  {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter()  {
        return 2 * this.radius * Math.PI;
    }

}
 class retangle extends Shape{
     constructor(color, filled,width,lenght) {
         super(color, filled);
         this.width = width
         this.lenght = lenght
     }
     getArea()  {
         return this.width * this.length;
     }

     getPerimeter()  {
         return 2 * (this.width + this.length);
     }
 }
 class Square extends Shape{
     constructor(color, filled,side) {
         super(color, filled);
         this.side = side
     }
 }
let shape = new Shape("red", false)
let tron = new Circle("red", false,3.5)
let Retangle = new retangle("red", true,6,8)
let square = new Square("red", true,9)
console.log(shape)
console.log(tron)
console.log(Retangle)
console.log(square)