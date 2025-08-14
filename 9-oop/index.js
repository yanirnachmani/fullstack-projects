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


//abstraction

// export function Location(longitude, latitude) {

//     const point = {}


//     if (longitude < 0 || latitude < 0) {
//         console.log('invalid point');
//         throw 'invalid point'
//     } else {
//         point.longitude = longitude
//         point.latitude = latitude
//     }

//     this.getPoint = function () {
//         console.log(point);
//         return point
//     }

//     this.setPoint = function (currentLoc) {
//         if (currentLoc.longitude < 0 || currentLoc.latitude < 0) {
//             throw 'invalid point';
//         } else {
//             point.longitude = currentLoc.longitude
//             point.latitude = currentLoc.latitude
//         }
//     }
// }

function Location(longitude, latitude) {

    const point = {}


    if (longitude < 0 || latitude < 0) {
        console.log('invalid point');
        throw 'invalid point'
    } else {
        point.longitude = longitude
        point.latitude = latitude
    }

    Object.defineProperty(this, 'currentPoint', {
        get: function () { return point },
        set: function (currentLoc) {
            if (currentLoc.longitude < 0 || currentLoc.latitude < 0) {
                throw 'invalid point';
            } else {
                point.longitude = currentLoc.longitude
                point.latitude = currentLoc.latitude
            }
        }
    })
}






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

    this.getObj = function () {
        console.log(this);

    }

    console.log(this);


}


User()


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

const a = user1.getObj


a()

user1.getObj()
user2.getObj()
// console.log(user2);




// console.log(user1.login());
// // console.log(user1.online);

const userPrototype = Object.getPrototypeOf(user1);
const objectAdam = Object.getPrototypeOf(userPrototype);
const nullPrototype = Object.getPrototypeOf(objectAdam);

console.log(userPrototype);
console.log(objectAdam);
console.log(nullPrototype);

User.howAreYou = function () {
    return this;

}

console.log(User.howAreYou());




// const arr = []
// const arrPrototype = Object.getPrototypeOf(arr);
// const pro = Object.getPrototypeOf(arrPrototype);
// const nullPro = Object.getPrototypeOf(pro);
// console.log(arrPrototype);
// console.log(pro);
// console.log(nullPro);


// objectAdam.toString = function () {
//     return 'I am ' + this.name
// }

// console.log(user1.toString())
// console.log(({}).toString())


// //

// User.howAreYou = function () {
//     console.log('how are you?');

// }


// User.howAreYou()
// // console.log(Object.keys());

// const prom = new Promise(() => {

// })

// prom.then()

// prom.allSettled([])


// Promise.allSettled([])


function Admin() {
    console.log(arguments);
    this.role = 'super admin'
    User.apply(this, arguments)
}



Admin.prototype = Object.create(User.prototype)
Admin.prototype.constructor = Admin



Admin.prototype.deleteUser = () => {

}

Admin.prototype.login = function () {
    console.log('I am admin');

}
const admin1 = new Admin('aryeyossi@gmail.com', 'yossi')

console.log(Admin.prototype);

const users = [user1, user2, admin1]

for (const user of users) {
    user.login()
}


// console.log(User.prototype);

// Admin.prototype.constructor = Admin

// console.log(admin1);



// function f(a, b, c) {
//     this.a = a
//     this.b = b
//     this.c = c
//     return this
// }

// function q() {
//     console.log(arguments);
//     const res = f.apply({ cat: 'miaue', dog: 'bark' }, arguments)
//     console.log(res);
// }

// q(1, 2, 3)

// {
//     'cat': 'miaue',
//     'dog': 'bark',
//     a: 1,
//     b: 2,
//     c: 3
// }








