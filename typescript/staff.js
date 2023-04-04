var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    Staff.prototype.getname = function () {
        return this._name;
    };
    Staff.prototype.setname = function (value) {
        this._name = value;
    };
    Staff.prototype.getemail = function () {
        return this._email;
    };
    Staff.prototype.setemail = function (value) {
        this._email = value;
    };
    Staff.prototype.getage = function () {
        return this._age;
    };
    Staff.prototype.setage = function (value) {
        this._age = value;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getname();
console.log(staff);
