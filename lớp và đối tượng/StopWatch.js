class StopWatch {
    constructor() {
        this.startTime=new Date().getTime();

    }
    start(){
        this.startTime=new Date().getTime();
    }
    end(){
        this.endTime = new Date().getTime()
    }
    getElapsedTime(){
        return this.endTime-this.startTime
    }
}
let stopWatch = new StopWatch()
// tính thời gian chạy của function
function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
stopWatch.start()
console.log(selectionSort(arr));
stopWatch.end()
console.log(stopWatch.getElapsedTime())