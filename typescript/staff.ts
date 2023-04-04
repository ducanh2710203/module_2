class Staff {
    private _name : string;
    private _email : string
    private _age : number;
    constructor(name,email,age) {
        this._name = name;
        this._email = email
        this._age = age
    }

    getname(): string {
        return this._name;
    }

    setname(value: string) {
        this._name = value;
    }

    getemail(): string {
        return this._email;
    }

    setemail(value: string) {
        this._email = value;
    }

    getage(): number {
        return this._age;
    }

    setage(value: number) {
        this._age = value;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20);


console.log(staff);





