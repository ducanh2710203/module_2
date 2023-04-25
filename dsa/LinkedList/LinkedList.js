"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this._size++;
        console.log("dài " + this._size);
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail = node;
            this.tail.next = node;
            this._size++;
            console.log("dài " + this._size);
        }
    };
    LinkedList.prototype.getsize = function () {
        return this._size;
    };
    LinkedList.prototype.readlist = function () {
        var listdata = [];
        var currentNode1 = this.head;
        while (currentNode1 !== null) {
            listdata.push(currentNode1.readData());
            currentNode1 = currentNode1.next;
        }
        //     let currentNode2 = this.tail
        //     while (currentNode2 !== null){
        //         listdata.push(currentNode2.readData())
        //         currentNode2 = currentNode2.next
        //     }
        //
        return listdata;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
