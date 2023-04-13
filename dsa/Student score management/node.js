"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Node.prototype.readData = function () {
        return { name: this.name, scope: this.score };
    };
    return Node;
}());
exports.Node = Node;
