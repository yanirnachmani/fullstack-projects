const numbers = [43, 46]

const length = numbers.unshift(4, 3, 5, 78, 67)

// console.log(numbers);
// console.log(length);


const numbers1 = [1, 2, 8, 3, 4, 5, 6, 8, 0]

// const newNumber1 = numbers1.splice(2, 3, 2345, 23444, 334)

// console.log(newNumber1);
// console.log(numbers1);

// const popped = numbers1.shift()

console.log(numbers1);
// console.log(popped);

console.log(numbers1.indexOf(8));
console.log(numbers1.indexOf(8, 3));
console.log(numbers1.lastIndexOf(8));
console.log(numbers1.lastIndexOf(9));


if (numbers1.lastIndexOf(2) !== -1) {
    console.log('exist')
}


if (numbers1.includes(7)) {
    console.log('exist')
}

// const obj = 

const people = [
    { 'id': 1, 'name': 'Hen' },
    { 'id': 2, 'name': 'Eli' },
    { 'id': 3, 'name': 'Hen' },
]

if (people.indexOf({ 'id': 1, 'name': 'Hen' }) !== -1) {
    console.log('Ailan');

}

const index = people.findIndex(person => person.id === 12)
console.log(index);

const elem = people.find(person => person.id === '1')
console.log(elem);
