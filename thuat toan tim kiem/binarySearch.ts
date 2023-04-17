function findFirstOccurrence(arr: number[],num:number) {
    let low:number=0
    let high:number=arr.length-1
    let result : number = -1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == num) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] > num) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return result;

}
let data:number[]=[2,3,4,4,4,5,6,7,8.10]
if (findFirstOccurrence(data,4)!==-1){
    console.log("phần tử "+ 4+" xuất hiện ở vị trí "+findFirstOccurrence(data,4))
}else console.log("phần tử ko tồn tại trong mảng")