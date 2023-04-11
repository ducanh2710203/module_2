import {Employee} from "./Employee";
import {Gender} from "./Employee";
export class Employee_manager {
    employeelist : Employee[]=[]
    constructor() {
    }
    add(employee:Employee){
        this.employeelist.push(employee)
    }
    getlist(){
       return this.employeelist
    }
    delete(i:number){
        this.employeelist.splice(i,1)
    }
}
let nv1 = new Employee("a",Gender.male,new Date("1990-09-19"),"ngu@gmail.com",)
let nv2 = new Employee("b",Gender.other,new Date("1990-09-19"),"ngu@gmail.com","0278136312")
let nv3 = new Employee("c",Gender.female,new Date("1990-09-19"),"ngu@gmail.com",)
let nv4 = new Employee("d",Gender.male,new Date("1990-09-19"),"ngu@gmail.com","03128376123")
let nv5 = new Employee("r",Gender.male,new Date("1990-09-19"),"ngu@gmail.com",)
let employee_manager = new Employee_manager()
employee_manager.add(nv1)
employee_manager.add(nv2)
employee_manager.add(nv3)
employee_manager.add(nv4)
employee_manager.add(nv5)

console.table(employee_manager.getlist())
employee_manager.delete(3)
console.table(employee_manager.getlist())
