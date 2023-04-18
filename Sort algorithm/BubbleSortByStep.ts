let numbers: number[] = [8, 3, 6, 1, 4, 10, 2, 50];
let exam:boolean = true
function bubbleSort(list: number[]) {
    while (exam) {
        let k : number = 0

        exam = false
        for (let i = 0; i < list.length; i++) {

            if (list[i-1]>list[i]){
                list.splice(i-1, 2, list[i], list[i-1]);
                k++
                console.log("Swap " + list[i-1] + " with " + list[i]);
                exam = true
            }

        }
        console.log("List after the  " + k + " sort: ");
        console.log( "========print array========")
        for (let j = 0; j < list.length; j++) {
            console.table(list[j] + "\t");
        }
        k=0
    }

}
console.log('==================begin==================')

bubbleSort(numbers)