import { Person } from "./person.js";


class Employee extends Person {
    constructor(name, age, haveChildren, address, salary, workLifeBalance, gamfa) {
        super(name, age, haveChildren, address)
        this.salary = salary
        this.workLifeBalance = workLifeBalance
        this.gamfa = gamfa
    }

    motto() {
        console.log(`${this.name} is Employee at ${this.gamfa ? 'gamfa' : 'company that sucks'}`);
    }
}

export default function foo() {
    console.log('Maoz\'s own company');

}

export {
    Employee
}
