import Circle from "./Circle";
function distance(circlemot:Circle,crilehai:Circle,d: number) {
 let distanceS =   Math.pow((circlemot.radius-crilehai.radius),2) + Math.pow(d,2)
    return Math.sqrt(distanceS)
}
let cricle1 = new Circle(9)
let cricle2 = new Circle(5)
console.log(distance(cricle1,cricle2,24))
