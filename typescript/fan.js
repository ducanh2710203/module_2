var Fan = /** @class */ (function () {
    function Fan(speed, status, radius, color) {
        if (radius === void 0) { radius = 5; }
        if (color === void 0) { color = "blue"; }
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.speed = this.SLOW;
        this.status = false;
        this.radius = 5;
        this.color = "blue";
        this.MEDIUM = 2;
        this.FAST = 3;
        this.speed = this.SLOW;
        this.status = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.toString = function () {
        if (this.status) {
            console.log("fan is on");
            console.log("tốc độ của quat: " + this.speed);
            console.log("quạt có màu: " + this.color);
            console.log("quạt có bán kính: " + this.radius);
        }
        else {
            console.log("fan is off");
            console.log("tốc độ của quat:" + this.speed);
            console.log("quạt có màu: " + this.color);
            console.log("quạt có bán kính: " + this.radius);
        }
    };
    return Fan;
}());
var fan1 = new Fan(3, true, 10, "yellow ");
var fan2 = new Fan(2, false);
fan1.toString();
fan2.toString();
