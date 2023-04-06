import {EmployeeManager} from "./EmployeeManager";
import {Employee} from "./Employee";

let employee = new Employee("nguyễn","a", "27/10/1004","trên dời","bảo vệ ")
let employee1 = new Employee("nguyễn","a", "27/10/1004","trên dời","bảo vệ ")
let employee2 = new Employee("nguyễn","a", "27/10/1004","trên dời","bảo vệ ")
let employee3 = new Employee("nguyễn","a", "27/10/1004","trên dời","bảo vệ ")
let employee4 = new Employee("nguyễn","a", "27/10/1004","trên dời","bảo vệ ")
let employee5 = new Employee("bùi","c", "27/10/1004","trên dời","vua ")
let employeeManager = new EmployeeManager()
employeeManager.add(employee)
employeeManager.add(employee1)
employeeManager.add(employee2)
employeeManager.add(employee3)
employeeManager.add(employee4)
console.table(employeeManager.getlist())

employeeManager.edit(4,employee5 )
console.table(employeeManager.getlist())


