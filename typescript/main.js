"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
function distance(circlemot, crilehai, d) {
    var distanceS = Math.pow((circlemot.radius - crilehai.radius), 2) + Math.pow(d, 2);
    return Math.sqrt(distanceS);
}
var cricle1 = new Circle_1.default(9);
var cricle2 = new Circle_1.default(5);
console.log(distance(cricle1, cricle2, 24));
