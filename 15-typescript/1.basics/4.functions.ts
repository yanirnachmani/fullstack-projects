
let green = (): string => {
    return 'hello world'
}

let helloWorld = green()

// helloWorld = false

let green1 : Function

// green1 = function(){}

// const multyByTen = (num: number): void => console.log(num * 10)
// let a = multyByTen(9)
// console.log(a);
// a = 'pppp'

// console.log(multyByTen(undefined))

// const funcWithOptional = (a: string, b: number, c?: string) : void => {
//     console.log(a, b, c)
// }

// funcWithOptional('dhjkfguejk', 68)


let calc: (num1: number, num2: number, operation: string) =>  number | boolean

calc = (a, b, op) => {
    if(op === 'add'){
        return a + b
    }
    return true
}

console.log(calc(2, 3, 'add'))



