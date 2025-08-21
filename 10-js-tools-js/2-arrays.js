// const numbers = [43, 46]

// const length = numbers.unshift(4, 3, 5, 78, 67)

// // console.log(numbers);
// // console.log(length);


// const numbers1 = [1, 2, 8, 3, 4, 5, 6, 8, 0]

// // const newNumber1 = numbers1.splice(2, 3, 2345, 23444, 334)
// //numbers1 = [1, 2, 2345, 23444, 334, 4, 5, 6, 8, 0]
// //newNumber1 = [8, 3]

// // console.log(newNumber1);
// // console.log(numbers1);

// // const popped = numbers1.shift()

// console.log(numbers1);
// // console.log(popped);

// console.log(numbers1.indexOf(8));
// console.log(numbers1.indexOf(8, 3));
// console.log(numbers1.lastIndexOf(8));
// console.log(numbers1.lastIndexOf(9));


// if (numbers1.lastIndexOf(2) !== -1) {
//     console.log('exist')
// }


// if (numbers1.includes(7)) {
//     console.log('exist')
// }

// // const obj = 

// const people = [
//     { 'id': 1, 'name': 'Hen' },
//     { 'id': 2, 'name': 'Eli' },
//     { 'id': 3, 'name': 'Hen' },
// ]

// if (people.indexOf({ 'id': 1, 'name': 'Hen' }) !== -1) {
//     console.log('Ailan');

// }

// const index = people.findIndex(person => person.id === 12)
// console.log(index);

// const elem = people.find(person => person.id === '1')
// console.log(elem);


// let firstArr = [1, 2, 3, 4]
// let secondArr = firstArr

// secondArr.push(5)
// firstArr.push(6)

// console.log(firstArr);
// console.log(secondArr);


// firstArr = []

// firstArr.length = 0

// const newFirstArr = firstArr.splice(0, firstArr.length)

// console.log('newFirstArr', newFirstArr);


// while (firstArr.length) {
//     firstArr.pop()
// }


// const firstArr = [1, 2, 3, 4]
// const secondArr = [5, 6, { name: 'Maoz' }]

// const combined = firstArr.concat(secondArr)
// // const combined = [...firstArr, ...secondArr]

// console.log('firstArr', firstArr);
// console.log('secondArr', secondArr);
// console.log('combined', combined);

// let sliced = combined.slice()
// sliced.unshift(56)
// console.log(sliced);
// console.log('combined', combined);

// const copied = [...firstArr]
// firstArr.unshift(357809)
// console.log(firstArr);

// console.log(copied);

// for (const item of combined) {
//     console.log(item);
// }

// for (const index in combined) {
//     console.log(combined[index]);
// }

// combined.forEach((elem, index) => console.log(`I'm index ${index} and my value is ${JSON.stringify(elem)}`));


// const msg = 'I am Yossi and VS code doesn\'t recognize my name'

// const spaceArr = msg.split(' ')

// const joined = spaceArr.join('-')

// console.log(spaceArr);
// console.log(joined);


const numbers = [76, 1, 2, 29, 3, 15, 4, 5, 87]

const max = numbers.reduce((accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue
)

console.log(max);

const arrObjs = [
    { a: 1, d: 4 }, { c: 3 }, { b: 2, e: 5 }
]

const flattedObj = arrObjs.reduce((accumulator, currentValue) =>
    ({ ...accumulator, ...currentValue })
)

console.log(flattedObj);

// numbers.sort((num1, num2) => {
//     if (num1 > num2) {
//         return -0.1
//     }
//     if (num1 < num2) {
//         return 0.1
//     }
// })

// const objArr = [
//     { id: 87, name: 'Doli', isSingle: false },
//     { id: 1, name: 'Shmoli', isSingle: false },
//     { id: 67, name: 'Shmum', isSingle: true },
//     { id: 45, name: 'aum', isSingle: true },
// ]




// const mappedArr = objArr.map((obj) => {
//     return obj.isSingle ? { ...obj, matchUp: 'Shidech' } : obj
// })

// console.log(mappedArr);



// objArr.sort(({ id: id1 }, { id: id2 }) => {
//     return id1 > id2 ? 1 : -1
// }
// )

// const boolNum = numbers.every(elem => elem >= 1)

// const res = objArr.every(elem => elem.isSingle)
// const res1 = objArr.some(elem => elem.isSingle)

// console.log(res);
// console.log(res1);
// console.log(boolNum);

