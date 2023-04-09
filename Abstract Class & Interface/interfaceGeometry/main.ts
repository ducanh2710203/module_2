import {Circle} from "./circle";
import {Cylinder} from "./Cylinder";
import {Resizeable} from "./Resizeable";
import {Square} from "./Square";
let cir = new Circle("tron",10)
console.log("ban dau "+cir.radius)
console.log(cir.calculateArea())
console.log(cir.calculateArea())
console.log("thay doi "+cir.resize(10))
console.log(cir.calculateArea())
console.log(cir.calculateArea())

