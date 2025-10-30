const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

const turnOn = e => console.log(e)
const playMusic = e => console.log('Di gi dayi dayi')

eventEmitter.on('doood', turnOn)
eventEmitter.on('doood', playMusic)
eventEmitter.emit('doood', {print: 'Turn the doood on', celcius: 40})
eventEmitter.emit('doood', {termostat: 'high', ferhenite: 440})

const cancelHeat = (e) => {
    e.removeAllListeners('doood')
}
eventEmitter.on('cancel', cancelHeat)
eventEmitter.emit('cancel', eventEmitter)
eventEmitter.emit('doood', {termostat: 'high', ferhenite: 440})

class Person extends EventEmitter {
    constructor(name, age){
        super()
        this.name = name
        this.age = age
    }
}

const person1 = new Person('Yossi', 34)
const person2 = new Person('Maoz', undefined)
const person3 = new Person('gentleman', 67)

const people = [person1, person2, person3]

for(const person of people){
    person.on('who am I', () => console.log(person.name))
    person.on('how old are you?', () => console.log(person.age))
}

for(const person of people){
    person.emit('who am I')
    person.emit('how old are you?')
}