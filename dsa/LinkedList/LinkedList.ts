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
    }

    // insertLastNode(data:T){
    //     if (!this.head){
    //         this.insertFirstNode(data)
    //     }else {
    //         let node = new Node(data)
    //         this.tail.next= node
    //         this.tail = node
    //         this.size++
    //     }
    // }
    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            // @ts-ignore
            this.tail.next = node;
            this.tail = node;
            this._size++;
        }
    }
    // get _size() {
    //     return this.size
    // }

    getsize(): number {
        return this._size;
    }

    readlist(){
        let listdata= []
        let currentNode = this.head
        while (currentNode !== null){
            listdata.push(currentNode.readData())
            currentNode = currentNode.next
        }
        return listdata
    }
}

