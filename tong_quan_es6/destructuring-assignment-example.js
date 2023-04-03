
let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;

console.log(firstName);
console.log(secondName);



let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);
console.log(secondName);

let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);
console.log(thirdName);


let [firstName,,...lastName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);
console.log(lastName);


let [firstName, secondName] = ["alpha", "beta", "gamma", "delta"];

console.log(firstName);
console.log(secondName);


[firstName, secondName] = [secondName, firstName]

console.log(firstName);
console.log(secondName);


function NamesList() {
    return ["alpha", "beta", "gamma", "delta"]
}
let [firstName, secondName] = NamesList();

console.log(firstName);
console.log(secondName);

let marks = {x: 21, y: -34, z: 47 };

let x = marks.x;
let y = marks.y;
let z = marks.z;

console.log(x);
console.log(y);
console.log(z);

let marks = {x: 21, y: -34, z: 47 };

const { x, y, z } = marks; // x = 21, y = -34, z = 47

console.log(x);
console.log(y);
console.log(z);


const marks = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = marks;
console.log(alpha1, beta1);