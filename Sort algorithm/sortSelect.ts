let list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];
function swap(arr: number[],xp:number, yp:number)
{
    console.log( arr[xp])
    console.log( arr[yp])
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
    console.log("--------swap--------")
    console.log( arr[xp])
    console.log( arr[yp])
}
function selectionSort(list: number[]) {

    for (let i = 0; i < list.length; i++) {
        let currentMin : number = list[i]
        for (let j = i+1; j < list.length; j++) {
            if (currentMin > list[j]){
                swap(list,i,j)
            }
            console.log( list)
        }
    }

}

selectionSort(list)