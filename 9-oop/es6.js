

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


