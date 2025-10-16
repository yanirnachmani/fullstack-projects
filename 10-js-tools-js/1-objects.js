// function f(name, age) {
//     console.log(name, age);
// }

const f = new Function('name', 'age', `
     console.log(name, age);
    `)


f('name', 23)

// console.log(f.__proto__.__proto__);

const person = {
    name: 'Yossi',
    age: 89
}

// console.log(person.__proto__);

const person1 = new Object()

// console.log(person1.__proto__);

console.log(Object.keys(person));


for (const key of Object.keys(person)) {
    console.log(key);
}

console.log(Object.entries(person));

for (const item of Object.entries(person)) {
    console.log(item);
}

const loc = {
    address: 'Petah Tiqwa'
}


// for (const item of Object.entries(person)) {
//     loc[item[0]] = item[1]
// }

// const loc1 = Object.assign(loc, person)

// console.log(loc);
// console.log(loc1);

// loc.l = 'p'

let loc1 = { ...loc, ...person }

console.log(loc1);
// console.log(loc1);

const objLiteral = {}
console.log(typeof objLiteral);

const objLiteral1 = new Object()
console.log(typeof objLiteral1);

const num = 1
console.log(typeof num);

const num1 = new Number(1)
console.log(num1);
console.log(typeof num1);


const str = 'fwegurfh'
const str1 = new String('jwerfgew')
console.log(typeof str);
console.log(typeof str1);

const bool = new Boolean(true)
console.log(typeof bool);
if (bool) {
    console.log('djkllllllllllsvhn5e');

}