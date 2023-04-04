class Fan {
    public SLOW : number =1
    public MEDIUM : number =2
    public FAST  : number =3
    private speed = this.SLOW
    private status : boolean = false
    private  radius : number = 5
    private  color : string = "blue"
    constructor(speed,status,radius=5,color="blue") {
     this.MEDIUM =2
        this.FAST =3
        this.speed = this.SLOW
        this.status = false
        this.radius = 5
        this.color = "blue"
    }
    toString(){
        if(this.status){
            console.log("fan is on")
            console.log("tốc độ của quat: "+this.speed)
            console.log("quạt có màu: "+this.color)
            console.log("quạt có bán kính: "+this.radius)
        }else {
            console.log("fan is off")
            console.log("tốc độ của quat:"+this.speed)
            console.log("quạt có màu: "+this.color)
            console.log("quạt có bán kính: "+this.radius)
        }
    }
}
let fan1 = new Fan(3,true,10,"yellow ")
let fan2 = new Fan(2,false)
fan1.toString()
fan2.toString()