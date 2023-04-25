import {LinkedList} from "./LinkedList";


let linkedList = new LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertLastNode(3);
linkedList.insertLastNode(30);
linkedList.insertLastNode(40);
console.table(linkedList.readlist())
console.log(linkedList.getsize());

console.table(linkedList.readlist())

//
// console.log(linkedLis1t.readlist());