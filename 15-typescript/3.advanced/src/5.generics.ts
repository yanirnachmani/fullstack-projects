// const addId = (obj: object) => {
//     return { ...obj, id: Math.random() * 100}
// }

const addId = <Y>(obj: Y) => {
     return { ...obj, id: Math.random() * 100}
}

const addId1 = <T extends {name: string}>(obj: T) => {
  return { ...obj, id: Math.random() * 100}
}



const person = addId({name: 'Yossi', age: 31})
const car = addId({year: 2024, firm: 'Tesla'})



const person1 = addId1({name: 'Yossi', age: 31})
// const car1 = addId1({year: 2024, firm: 'Tesla'})

const personName = person.name

interface Resource<S, T extends object, U > {
    key: S
    topic: T
    message: U
}


const kafka : Resource<string, object, string> = {
    key: '4857482758',
    topic: {},
    message : ""
}

const mqtt : Resource<number, object, string> = {
    key: 4857482758,
    topic: {},
    message : ""
}

