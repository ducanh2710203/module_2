export class Book {
    ID: string = ""
    name: string = ""

    constructor(ID: string, name: string) {
        this.name = name
        this.ID = ID
    }

    getID(): string {
        return this.ID;
    }
    setName(name:string){
        this.name=name
    }

    getName(): string {
        return this.name;
    }
}