export enum Gender {
    male= "male",
    female= "female",
    other= "other"
}

export class Employee {

    private name: string = ""
    private sex: Gender = Gender.other
    private birthday: Date
    private telephoneNumber: string = ''
    private email: string = ""

    constructor(name: string, sex: Gender, birthday: Date, email: string, telephoneNumber?: string) {
        this.name = name
        this.sex = sex
        this.birthday = birthday
        this.email = email

        if (telephoneNumber !== undefined) {
            this.telephoneNumber = telephoneNumber
        }
    }


    getname(): string {
        return this.name;
    }

    setname(value: string) {
        this.name = value;
    }

    getsex(): Gender {
        return this.sex;
    }

    setsex(value: Gender) {
        this.sex = value;
    }

    getbirthday(): Date {
        return this.birthday;
    }

    setbirthday(value: Date) {
        this.birthday = value;
    }

    gettelephoneNumber() {
        return this.telephoneNumber;
    }

    settelephoneNumber(value: string) {
        this.telephoneNumber = value;
    }

    getemail(): string {
        return this.email;
    }

    setemail(value: string) {
        this.email = value;
    }
}
