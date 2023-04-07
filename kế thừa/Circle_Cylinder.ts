class Circle {
    color : string = " thâm"
    radius : number

    constructor(color: string, radius: number) {
        this.color = color;
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;

    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;

    }
    toString (){
        console.log("- hình tròn")
        console.log("- color: "+ this.color)
        console.log(" radius: " + this.radius)
        console.log("- arena : " + this.getArea())
        console.log("- Perimeter: " + this.getPerimeter())
    }
}
class Cylinder extends Circle{
    height : number

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this.height = height;
    }
    countable(): number {
        return this.height*super.getArea();
    }
    totalArea(){
        return super.getPerimeter()*(this.radius+this.height)
    }
    surroundingArea(){
        return super.getPerimeter()*this.height
    }
    toString() {
        console.log("- hình trụ tròn")
        console.log("- color: "+ this.color)
        console.log(" radius: " + this.radius)
        console.log(" height: " + this.height)
        console.log("- countable: " + this.countable())
        console.log("- totalArea: " + this.totalArea())
        console.log("- surroundingArea: " + this.surroundingArea())
    }

}
let  cricle = new Circle("red",10)
let  cylinder = new Cylinder("thâm",20,15)
cricle.toString()
cylinder.toString()