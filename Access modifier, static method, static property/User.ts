enum Role {
    một = 1,
    hai
}
class User {
    private _name : string
    private _email:string
    private _role : Role


    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    getinfo(){
        console.log("- tên người dùng: "+ this._name)
        console.log("- địa chỉ email: "+ this._email)
    }
    isAdmin(){
        if (this._role === Role.một){
            console.log("- admin")
        }else if (this._role === Role.hai){
            console.log("- người bình thường")
        }
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }


}
let ng1 = new User("ng v a", "nda@gmai.com",Role.một)
let ng2 = new User("ng v a", "nda@gmai.com",Role.hai)
let ng3 = new User("ng v a", "nda@gmai.com",Role.một)

ng1.getinfo()
ng1.isAdmin()
ng2.getinfo()
ng2.isAdmin()
ng3.getinfo()
ng3.isAdmin()
