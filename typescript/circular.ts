class Cricle {
    color: string
    radius: number

    constructor(color: string, radius: number) {
        this.color = color
        this.radius = radius
    }
}

let criclelist: Cricle[] = []
criclelist.push(new Cricle("đỏ", 10))
criclelist.push(new Cricle("xanh", 12))
criclelist.push(new Cricle("thâm", 15))
criclelist.push(new Cricle("tím", 19))
criclelist.push(new Cricle("đen", 8))
let i: number = 1
function printf(cricle: Cricle) {
    console.log("hình tròn có màu "+i+" : " + cricle.color + "có bán kính: " + cricle.radius)
    i++
}


criclelist.forEach(printf)