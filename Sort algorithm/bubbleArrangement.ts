let list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
let exam: boolean = true

function bubbleSort(list: number[]) {
    while (exam) {
        exam = false
        for (let i = 0; i < list.length; i++) {
            if (list[i - 1] > list[i]) {
                list.splice(i - 1, 2, list[i], list[i - 1]);
                exam = true
            }

        }
    }

    return list
}

console.log(bubbleSort(list))