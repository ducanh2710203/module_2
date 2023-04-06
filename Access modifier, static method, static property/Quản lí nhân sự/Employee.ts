export class Employee {
    private Surname:string
    private name : string
    private birthday:string
    private address:string
    private JobPosition:string

    constructor(Surname: string, name: string, birthday: string, address: string, JobPosition: string) {
        this.Surname = Surname;
        this.name = name;
        this.birthday = birthday;
        this.address = address;
        this.JobPosition = JobPosition;
    }
}