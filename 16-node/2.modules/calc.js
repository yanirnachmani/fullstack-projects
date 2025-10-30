function add(num1 , num2){
    return num1 + num2
}

function sub(num1 , num2){
    return num1 - num2
}

function multi(num1 , num2){
    return num1 * num2
}

function devision(num1 , num2){
    return num1 / num2
}

module.exports.add = (num1 , num2) => num1 + num2
module.exports.sub = sub

module.exports = {...module.exports,  mult: multi, devisio: devision}
