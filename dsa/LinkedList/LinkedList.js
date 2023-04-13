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
    };
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
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            // @ts-ignore
            this.tail.next = node;
            this.tail = node;
            this._size++;
        }
    };
    // get _size() {
    //     return this.size
    // }
    LinkedList.prototype.getsize = function () {
        return this._size;
    };
    LinkedList.prototype.readlist = function () {
        var listdata = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listdata.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listdata;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
