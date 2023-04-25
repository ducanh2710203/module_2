import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null
    tail: Node<T> | null
          _size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    insertFirstNode(data: T) {
        let node = new Node(data)
        node.next = this.head
        this.head = node
        if (!this.tail) {
            this.tail = node
        }
        this._size++
        console.log("dài "+ this._size)
    }


    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            this.tail = node;
            this.tail.next = node;
            this._size++;
            console.log("dài "+ this._size)

        }
    }

    getsize(): number {
        return this._size;
    }

    readlist(){
        let listdata= []
        let currentNode1 = this.head
        while (currentNode1 !== null){
            listdata.push(currentNode1.readData())
            currentNode1 = currentNode1.next
        }
    //     let currentNode2 = this.tail
    //     while (currentNode2 !== null){
    //         listdata.push(currentNode2.readData())
    //         currentNode2 = currentNode2.next
    //     }
    //
        return listdata
    }
}

