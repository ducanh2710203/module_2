function findItemMiss(arr: number[]) {
    let brray = []
    for (let i:number = 0; i < arr[arr.length-1]; i++) {
    if (arr.indexOf(i)===-1) brray.push(i)
    }
    return brray
}
let array =[1,4,3,5,8,9,11]
console.log(findItemMiss(array))