"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Studenlist = void 0;
var node_1 = require("./node");
var Studenlist = /** @class */ (function () {
    function Studenlist() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    Studenlist.prototype.insertFirst = function (name, score) {
        var node = new node_1.Node(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    Studenlist.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node = new node_1.Node(name, score);
            // @ts-ignore
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    Studenlist.prototype.getsize = function () {
        return this.size;
    };
    Studenlist.prototype.readlist = function () {
        var listdata = [];
        var currentNode1 = this.head;
        while (currentNode1 !== null) {
            listdata.push(currentNode1.readData());
            currentNode1 = currentNode1.next;
        }
        // console.log("so lan lap" + count)
        return listdata;
    };
    Studenlist.prototype.totalStudentsFail = function () {
        var numStudentsFail = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.score < 5) {
                numStudentsFail++;
            }
            currentNode = currentNode.next;
        }
        return numStudentsFail;
    };
    Studenlist.prototype.listStudentMaxScore = function () {
        var currentNode = this.head;
        var MaxScore = [];
        var max = 0;
        while (currentNode !== null) {
            if (max < currentNode.score) {
                max = currentNode.score;
            }
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        console.log("MaxScore" + max);
        while (currentNode !== null) {
            if (max === currentNode.score) {
                MaxScore.push(currentNode.name);
            }
            currentNode = currentNode.next;
        }
        return MaxScore;
    };
    Studenlist.prototype.findByName = function (findName) {
        var currentNode = this.head;
        var result = "";
        while (currentNode !== null) {
            if (findName === currentNode.name) {
                result = "name :" + currentNode.name + " score: " + currentNode.score;
                return result;
            }
            currentNode = currentNode.next;
        }
    };
    return Studenlist;
}());
exports.Studenlist = Studenlist;
