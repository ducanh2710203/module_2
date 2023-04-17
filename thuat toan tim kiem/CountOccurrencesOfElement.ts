function elementAppears(arr:number[],num:number){
    let count : number  = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===num){
            count++
        }
    }
    return count
}
let arr :number[]=[2,3,34,4,1,4,5,4,2,3,4,6,7,1]
let num : number = 34
let result : number = elementAppears(arr,num)
console.log("số "+num+" xuất hiện "+ result)