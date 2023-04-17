function TotalRoomRate(arr:number[][]){
    let ngu :number[] = []
    let sum : number = 0
    for (let i = arr.length-1; i >0; i--) {
        for (let j = 0; j <arr[i].length ; j++) {
            if(arr[i-1][j]!==0){
               sum += arr[i-1][j]

            }
        }
    }
    return sum
}
let matrix =   [[0, 1, 1, 2],
                [0, 5, 0, 0],
                [2, 0, 3, 3]]
console.log(TotalRoomRate(matrix))