

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.online = false
    }

    login() {
        this.online = true
        return this
    }

    logout() {
        this.online = false
    }

    static howAreYou = () => console.log(this);

}

const user = new User('hefhq', 'mew')


// const r = user.login

// r()


User.howAreYou()

console.log(user.online);


const User1 = class {
    constructor(yyyy) {
        this.yyyy = yyyy
    }
}

const userAn = new User1(4789033333)


console.log(userAn);


const map = new WeakMap()

class Location {
    constructor(lon, lat, country) {
        if (lon > 0 && lat > 0) {
            map.set(this,
                [
                    { point: { lon, lat } },
                    { country }
                ]
            )
        } else {
            throw new Error('i dont like you at all!')
        }
    }

    get point() {
        const propArr = map.get(this)
        const filtered = propArr.filter(objProp => objProp.point)//[{ point: { lon, lat } }]
        return filtered[0].point
    }

    set point({ lon, lat }) {
        const propArr = map.get(this)
        if (lon > 0 && lat > 0) {
            for (const prop of propArr) {
                if (prop.point) {
                    prop.point = loc
                }
            }
            map.set(this, propArr)
        } else {
            throw new Error('i dont like you at all!')
        }
    }
}

try {
    const loc = new Location(123, 40, 'rwea')
    console.log(loc.point);
    loc.point = { lon: 0, lat: 5636 }
    console.log(loc.point);
} catch (error) {
    console.log(error);

}











