var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.online = false;
    }
    User.prototype.login = function () {
        this.online = true;
        console.log(this.email + ' has logged in');
    };
    User.prototype.logout = function () {
        this.online = false;
        console.log(this.email + ' has logged out');
    };
    User.prototype.displayProps = function () {
        console.log(this.email);
        console.log(this.name);
        console.log(this.online);
    };
    return User;
}());
var user = new User('hjsdbhjwaed@g.com', 'Yossi');
user.displayProps();
user.login();
user.displayProps();
user.online = false;
console.log('******');
user.displayProps();
