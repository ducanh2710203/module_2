import {Node} from "./node";
export class EmployeeSalary<T>{
    head : Node<T>|null
    tail : Node<T>|null
    size : number
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    addNode(month: string, money: number){
        let node = new Node(month, money)
        node.next = this.head
        this.head = node
        if (!this.tail){
            this.tail = node
        }
        this.size++
    }
    readlist(){
        let listdata= []
        let currentNode1 = this.head
        while (currentNode1 !== null){
            listdata.push(currentNode1.readData())
            currentNode1 = currentNode1.next
        }

        // console.log("so lan lap" + count)
        return listdata
    }
    totalEmployeeSalary(){
        let totalSalary :number = 0
        let  currentNode = this.head
        while (currentNode !== null){
            totalSalary += currentNode.money
            currentNode = currentNode.next
        }
        return totalSalary
    }
    HighestSalaryMonth(){
        let HighestMonth :number = 0
        let  currentNode = this.head

        while (currentNode !== null){
            if (HighestMonth < currentNode.money){
                HighestMonth = currentNode.money
            }
            currentNode = currentNode.next
        }
        return HighestMonth
    }
    }



