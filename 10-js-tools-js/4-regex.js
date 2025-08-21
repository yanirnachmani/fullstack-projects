

//i

//'[ab]cd' => 'acd', 'bcd'


const reg = /^[\d]{3}[\s][\w]+$/


function validate(reg, str) {
    const test = reg.test(str)
    console.log(test, reg, str);

}

validate(reg, '123 _')