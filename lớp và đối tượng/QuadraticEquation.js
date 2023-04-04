class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    geta() {
        return this.a;
    }

    getb() {
        return this.b;
    }

    getc() {
        return this.c;
    }
    getDiscriminant(){
        let delta = (this.b * this.b)-4*this.a*this.c
        return delta

    }
    getRoot1(){
        return(-this.b + Math.pow(this.getDiscriminant(),0.5))/(2*this.a)
    }
    getRoot2(){
        return(-this.b - Math.pow(this.getDiscriminant(),0.5))/(2*this.a)
    }


}
let trr = new QuadraticEquation(2,4,2)
console.log(trr.getDiscriminant())
    if (trr.getDiscriminant()>0){
        console.log(trr.getRoot1())
        console.log(trr.getRoot2())
    }else if (trr.getDiscriminant()===0){
        console.log(trr.getRoot1())
    }
    else {
        console.log("The equation has no roots")
    }


