"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSalary = void 0;
var node_1 = require("./node");
var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    EmployeeSalary.prototype.addNode = function (month, money) {
        var node = new node_1.Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    EmployeeSalary.prototype.readlist = function () {
        var listdata = [];
        var currentNode1 = this.head;
        while (currentNode1 !== null) {
            listdata.push(currentNode1.readData());
            currentNode1 = currentNode1.next;
        }
        // console.log("so lan lap" + count)
        return listdata;
    };
    EmployeeSalary.prototype.totalEmployeeSalary = function () {
        var totalSalary = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            totalSalary += currentNode.money;
            currentNode = currentNode.next;
        }
        return totalSalary;
    };
    EmployeeSalary.prototype.HighestSalaryMonth = function () {
        var HighestMonth = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (HighestMonth < currentNode.money) {
                HighestMonth = currentNode.money;
            }
            currentNode = currentNode.next;
        }
        return HighestMonth;
    };
    return EmployeeSalary;
}());
exports.EmployeeSalary = EmployeeSalary;
