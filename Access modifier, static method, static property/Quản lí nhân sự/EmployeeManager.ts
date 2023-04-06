import {Employee} from "./Employee";

export class EmployeeManager {
    static employeelist : Employee[]= []

    constructor() {
    }
    add(employee:Employee){
        EmployeeManager.employeelist.push(employee)
    }
    edit(n:number,employee:Employee){
        if (n<EmployeeManager.employeelist.length){
            EmployeeManager.employeelist[n] = employee
        }else {
            console.log("ko tìm được phần tử bạn muốn thay đổi")
        }
    }
    delete(n:number){
        EmployeeManager.employeelist.splice(n,1)
    }
    getlist():Employee[]{
        return EmployeeManager.employeelist
    }
}