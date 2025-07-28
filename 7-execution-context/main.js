// let x = 1
// function foo() {
//     {
//         var y = 2
//         var x = 5
//     }
//     console.log('foo', x);
//     console.log('foo', y);
//     var p = 90
//     // bar()
// }
// {
//     var p = 47
// }
// console.log(p);

// foo()
// console.log('win', x);
// bar()
// function bar() {
//     var z = 3
//     function baz() {
//         console.log('baz', x);
//         console.log(y);
//         console.log(z);

//     }
//     baz()
// }


let x = 1

function foo(y) {
    let t = 19
    function boo(z) {
        return x + y + z + t
    }
    return boo
}

let f = foo(2)

//f =  function (z) {
//     return x + y + z + t
// }



console.log(f(4));
//x = 1, z = 4 

console.dir(f);



