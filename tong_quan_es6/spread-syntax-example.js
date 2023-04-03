function sum(a, b, c) {
    return a + b + c
}
let munber= [ 1, 3,5]
console.log(sum.apply(null,munber))
let num = [1,2,4]
console.log(sum(...num))
/*
var a = [1, 2];
a.push([1, 2, 3]);
console.log(a);
*/

/*
var a = [1, 2];
a.push.apply(a,[1, 2, 3]);
console.log(a);
*/

/*
var a = [1, 2];
var b= [1,2,3];
a.push(...b);
console.log(a);
*/

/*
var a = [1, 2];
var b= [1,2,3];
a = [...b];
console.log(a);
*/

/*
var obj1={a:1, b:2};
var obj2 = {...obj1};
console.log(obj2);
*/

var a = [1,2];
var b = [3,4,5];
var c = [...a,...b];
console.log(c);