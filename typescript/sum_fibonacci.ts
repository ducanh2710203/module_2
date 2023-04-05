
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

function sumFibonacciSequence(n:number) {
    let sum :number = 0
    for (let i = 0; i < n; i++) {
        sum += fibonacci(i)
    }
    return sum;
}

console.log( sumFibonacciSequence(4))
