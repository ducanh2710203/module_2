import {Studenlist} from "./studenlist";
let studen = new Studenlist()
studen.insertFirst("duc anh ",10)
studen.insertFirst("van b ",6)
studen.insertFirst("van c  ",10)
studen.insertFirst("van v ",1)
studen.insertLast("van h ",4)
studen.insertLast("van y ",1)
console.table(studen.readlist())
console.log(studen.getsize());
console.log("=======totalStudentsFail=======")

console.log(studen.totalStudentsFail())
console.log("=======listStudentMaxScore=======")
console.log(studen.listStudentMaxScore())
console.log("=======findByName=======")
console.log(studen.findByName("duc anh "))