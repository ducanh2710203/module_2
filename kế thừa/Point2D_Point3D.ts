class Point2D {
    private _x: number
    private _y: number

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getxy(): object {
        return {Y: this._y, X: this._x}
    }

    setxy(x: number, y: number) {
        this._x = x
        this._y = y

    }
}

class Point3D extends Point2D {
    private _z: number

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getxyz():object{
        super.getxy()
        return {Z:this._z}
    }
    setxyz(x: number, y: number,z:number){
        super.setxy(x,y)
        this._z = z
    }
}
let p2d = new Point2D(2,6)
let p3d = new Point3D(2,6,9)
console.log(p3d)