import createUser from "./person.js";


const s1 = Symbol()
const s2 = Symbol()

console.log(s1);


console.log(s1 === s2);

const s3 = Symbol('key')
const s4 = Symbol('key')

console.log(s3 === s4);

const s5 = Symbol.for('key')
const s6 = Symbol.for('key')


console.log(s5 === s6);

console.log(Symbol.keyFor(s5));

const user1 = createUser('Avi', 2355555555545)

console.log(user1);

console.log(user1.getId());

console.log(Object.keys(user1));





