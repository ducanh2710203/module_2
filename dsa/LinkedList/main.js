"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.insertFirstNode(1);
linkedList.insertFirstNode(2);
linkedList.insertLastNode(3);
linkedList.insertLastNode(30);
linkedList.insertLastNode(40);
console.table(linkedList.readlist());
console.log(linkedList.getsize());
console.table(linkedList.readlist());
//
// console.log(linkedLis1t.readlist());
