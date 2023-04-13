"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    Node.prototype.readData = function () {
        return { month: this.month, money: this.money };
    };
    return Node;
}());
exports.Node = Node;
