class Point {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    distance(B){
        let distanceX = this.x - B.x
        let distanceY = this.y - B.y
        return Math.hypot(distanceX,distanceY)
    }
}
let point1 = new Point(5,5)
let point2 = new Point(10,10)
console.log(point1.distance(point2))
