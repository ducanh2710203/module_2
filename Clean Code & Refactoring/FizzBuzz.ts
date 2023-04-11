export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let fizz = n % 3 == 0;
        let  buzz = n % 5 == 0;
        if (fizz &&  buzz) {
            this.message = 'FizzBuzz';
        } else if ( buzz) {
            this.message = 'Fizz';
        } else if(fizz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}