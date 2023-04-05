let arr : number[]=[1,2,14,6,7,9,10]
let arr1 : number[]=[]
// for (let i = 0; i < 11; i++) {
//     if (arr.indexOf(i)===-1){
//         arr1.push(i)
//     }
// }
arr.sort((a, b) => (b - a))

let i :number= 0
while (i<arr[0]){
    if (arr.indexOf(i)===-1){
        arr1.push(i)
    }
    i++
}
console.log(arr1)
