class Application {
    private name : string
    static count : number = 0

    constructor(name: string) {
        this.name = name;
        Application.count++
    }
}
let app1 = new Application('App 1');
console.log(Application.count);
let app2 = new Application('App 2');
let app3= new Application('App 3');
let app4 = new Application('App 4');
console.log(Application.count);
let app5 = new Application('App 5');
console.log(Application.count);