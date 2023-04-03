// const cars1 = ['ngu',"ocs cho ","bus ","đánh nhau ko "]
// const cars2 = [...cars1]
// const cars3 = [4,...cars1,"ngu"]
// console.log(cars2)
// console.log(cars3)
// const car = "AUDI";
// const a = [...car];
// console.log(a);
const cars1 = {
    Brand : "Nissan",
    Color : "RED",
    ngu : "ochs cho"
}
const cars2 = {
    Brand : "Nissan",
    Color : "BLUE",
    Year : 2004
}
const cars3 = {...cars1,...cars2};
console.log(cars3);
const numbers = [3,5,7,8,9];
// Here we assign a,b and c with 3,5 and 7,
// the rest of the elements will all go to others
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);