

//i

//'[ab]cd' => 'acd', 'bcd'


const reg = /\d{11}/


function validate(reg, str) {
    const test = reg.test(str)
    console.log(test, reg, str);
}

function matches(reg, str) {
    const m = str.match(reg)
    return m ? (reg.global ? m : [m[0]]) : []
}

console.log(validate(reg, '343234323434'))
console.log(matches(reg, '343234323434343234323434'))