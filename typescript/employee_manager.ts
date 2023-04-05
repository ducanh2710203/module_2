enum Gender  {
    male,
    female,
    other
}
class Employee_manager {
    name : string = ""
    sex : Gender = Gender.other
    birthday : Date
    telephoneNumber : string =""
    email : string = ""
    constructor(name : string,sex : Gender,birthday : Date,telephoneNumber : string,email : string) {
        this.name = name
        this.sex = sex
        this.birthday = birthday
        this.telephoneNumber = telephoneNumber
        this.email = email
    }
}
let employeeList : Employee_manager[]= []
employeeList.push(new Employee_manager("Nguyen Van A", Gender.male, new Date("1990-09-19"), "ang@gmail.com", "0123456789"))
employeeList.push(new Employee_manager("Nguyen Van B", Gender.female, new Date("1990-09-19"), "bng@gmail.com", "0812313213"))
employeeList.push(new Employee_manager("Nguyen Van D", Gender.other, new Date("1990-09-19"), "dng@gmail.com", "0683216445"))
employeeList.push(new Employee_manager("Nguyen Van C", Gender.male, new Date("1990-09-19"), "cng@gmail.com", "0752174461"))
let  i : number = 0
function printf(employee_manager:Employee_manager) {
    console.log("tên nhân viên "+i+" : "+employee_manager.name+" giới tính "+employee_manager.sex+" ngày sinh "+employee_manager.birthday+" số điên Thoại "+employee_manager.telephoneNumber+" email "+employee_manager.email)
}
employeeList.forEach(printf)