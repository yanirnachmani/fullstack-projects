//encapsulation

// function Person(name, age) {
//     this.name = name
//     this.age = age
//     this.print = function () {
//         console.log(this);
//     }
// }

// const person1 = new Person('Yossi', 34) // {}

// person1.print()

//abstraction
import { Location } from "./location.js";


try {
    const loc = new Location(89, 89)
    // console.log(loc);

    // console.log(loc.currentPoint);
    loc.currentPoint = { longitude: 676767, latitude: 9788 }
    // console.log(loc.currentPoint);

    // const point = loc.getPoint();
    // loc.setPoint({ longitude: -676767, latitude: 9788 })
    // loc.getPoint()

} catch (error) {
    console.error(error);

}


//inheritance

function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
}

User.prototype.login = function () {
    this.online = true
    console.log(this.email + 'has logged in');
}

User.prototype.logout = function () {
    this.online = false
    console.log(this.email + 'has logged out');
}

const user1 = new User('a@getComputedStyle.com', 'Yoss Ha\'dos')//{}
const user2 = new User('a@wqerwqhrwkq.com', 'Yossi shel haver')//{}

// console.log(user1);
// console.log(user2);


// console.log(user1.login());
// console.log(user1.online);

const userPrototype = Object.getPrototypeOf(user1);
const objectAdam = Object.getPrototypeOf(userPrototype);
const nullPrototype = Object.getPrototypeOf(objectAdam);

console.log(userPrototype);
console.log(objectAdam);
console.log(nullPrototype);









