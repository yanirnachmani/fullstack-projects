// function STTCallback() {
//     console.log(this);
// }

// const car = {
//     year: '2025',
//     color: 'black',
//     showThis() {
//         console.log(this)
//     },
//     printThisAfterSec() {
//         setTimeout(() => console.log(this)
//             , 1000)
//     }
// }

// car.showThis()


// const showThisWin = car.showThis


// // console.log(showThisWin);

// showThisWin()


// car.printThisAfterSec()



// const str = `Hey Dolev how are you? ${car.color}`

// const oldStr = 'Hey Dolev how are you? ' + car.color


// console.log(str);
// console.log(oldStr);


// const numbersObjs = [{ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5, f: 6 }]

// for (const item of numbersObjs) {
//     for (const objKey in item) {
//         console.log(`the value of '${objKey}' is ${item[objKey]}`);
//     }
//     console.log('----------------');
// }

// const numbers = [1, 2, 3, 4, 5, 6]

// const numbersMultiplyBySix = numbers.map(maoz => maoz * 6)



// console.log(numbersMultiplyBySix);

// // const newNumbersObjs = [{ a: 1, b: 2 , ab : 12}, { c: 3, d: 4, cd:34 }, { e: 5, f: 6 , ef:56}]

// const newNumbersObjs = numbersObjs.map(function (obj) {
//     let newKey = ''
//     let newVal = ''
//     for (const itemKey in obj) {
//         newKey = newKey + itemKey
//         newVal = newVal + obj[itemKey]
//     }
//     const newObj = { ...obj, [newKey]: parseInt(newVal) }
//     return newObj
// })




// console.log(newNumbersObjs);


const colors = ['red', 'green', 'blue']

// const person = {
//     name: 'Avi',
//     gender: 'Other'
// }

// const { gender: newGender, name } = person

// const red = colors[0]
// const green = colors[1]
// const blue = colors[2]


let [a, b, c] = colors

const [r1, ...restColors] = colors

console.log(r1, restColors);



function receiver(param, param2, ...rest) {
    console.log(param)
    console.log(param2)
    console.log(rest)
}

receiver(1, 2, 3, 3, 4, 4, 5, 6, 78, 9, 0)

const obj = {
    aa: 'a',
    b: 'b',
    c: 'c',
}


const { aa, ...restObj } = obj

console.log(aa);
console.log(restObj);


const person1 = {
    name: 'Shir',
    age: 25
}

const person2 = {
    name: 'Yossi',
    age: 34
}


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    print() {
        console.log(`The name is: ${this.name} and the age is: ${this.age}`);

    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

const person1Byobj = new Person('Shir', 25)
const person2Byobj = new Person('Yossi', 34)

person1Byobj.print()
person2Byobj.print()


console.log(person1Byobj.getName())

person1Byobj.setName('Avi')


console.log(person1Byobj.getName())





class Job extends Person {
    constructor(name, age, degree, address) {
        super(name, age)
        this.degree = degree
        this.address = address
    }

    motto() {
        console.log(`${this.name}'s motto ${this.degree} is not important at all! 
        and the age ${this.age} is not a factor!!
        ${this.address}`);

    }
}


const Employee = new Job('Yanir', 41, 'BA', 'Hailui 1 Kiryat Moshe Jerus')

Employee.motto()






// console.log(c, b, a);

// r = 'p'

// console.log(name, newGender)


// const basicColors = ['red', 'green', 'blue']
// const additionalColors = ['pink', 'violet', 'orange']

// const combinedArraysColors = basicColors.concat(additionalColors)

// console.log(combinedArraysColors);

// function yamam() {
//     console.log('Warriors');

// }

// const combinedByES6 = [...basicColors, 123, yamam, 7856, ...additionalColors]

// console.log(combinedByES6);

// combinedByES6[4]()

// const animal = {
//     name: 'camel',
//     maaleGera: true,
//     mafrisParsa: false
// }

// const fish = {
//     name: 'eel',
//     kaskeset: false,
//     snapir: false
// }

// const kosher = false
// const halal = true
// const nationality = 'juif'
// const religion = true

// const creature = { ...animal, eat: !religion || (nationality !== 'juif' ? halal : kosher), ...fish }

// console.log(creature);
