export class Person {
    constructor(name, age, haveChildren, address) {
        this.name = name
        this.age = age
        this.haveChildren = haveChildren
        this.address = address
    }

    print() {
        console.log(
            this
        );
    }
}

export class Animal {
    constructor() {

    }
}

export let x = 90