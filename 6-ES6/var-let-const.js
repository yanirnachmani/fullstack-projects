
// let a

// console.log(a);
// console.log(b);


for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);


function increment() {
    i++
}

increment()

console.log(i);

function incrementWithParam(i) {
    i++

    console.log(i);

}

incrementWithParam(3)

console.log(i);

{
    var i = 4
}


console.log(i);


for (let j = 0; j < 5; j++) {
    console.log(j);

}

// console.log(j);

let j = 9

console.log(j);



{
    let j = 0
    j++
    console.log(j);

}

console.log(j);

for (const item of ['red', 'green', 'blue']) {
    console.log(item);
}

