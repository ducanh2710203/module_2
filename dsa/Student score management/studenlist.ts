import {Node} from "./node";
export class Studenlist<T> {
    head : Node<T>|null
    tail : Node<T>|null
    size : number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirst(name: string, score: number){
        let node = new Node(name, score)
        node.next = this.head
        this.head = node
        if (!this.tail){
            this.tail = node
        }
        this.size++
    }
    insertLast(name: string, score: number){
        if (!this.head) {
            this.insertFirst(name,score);
        } else {
            let node = new Node(name, score);
            // @ts-ignore
            this.tail.next = node;
            this.tail = node;
            this.size++;

        }
    }
    getsize():number{
        return this.size
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
    totalStudentsFail(){
        let numStudentsFail = 0
        let currentNode = this.head
        while (currentNode !== null){
            if (currentNode.score<5){
                numStudentsFail++
            }
            currentNode = currentNode.next
        }

        return numStudentsFail
    }
    listStudentMaxScore(){
        let currentNode = this.head
        let MaxScore = []
        let max: number = 0
        while (currentNode !== null){
            if (max<currentNode.score){
                max=currentNode.score
            }
            currentNode = currentNode.next
        }
         currentNode = this.head
        console.log("MaxScore"+max)
        while (currentNode !== null){
            if (max===currentNode.score){
                MaxScore.push(currentNode.name)
            }
            currentNode = currentNode.next
        }
        return  MaxScore

    }
    findByName(findName : string){
        let currentNode = this.head
        let result: string = ""
        while (currentNode !== null){
            if (findName===currentNode.name){
                result = "name :"+ currentNode.name+" score: "+currentNode.score
                return result
            }
            currentNode = currentNode.next
        }

    }
}