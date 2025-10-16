// let cat = 'Meow'
// let dog = 'Woof'
// let bird = 'Tweet'

// const animals = {
//     cat: cat,
//     dog: dog,
//     bird: bird,
//     ruslan: function () {
//         console.log(this)
//     }
// }

// console.log(animals.bird)

// animals.ruslan();




// const ruslan = animals.ruslan.bind({
//     red: 'adom',
//     blue: 'cachol',
//     green: 'Yarok',
// })

// ruslan()

// const Dolev = {
//     dror: 'Zsif, Zsif',
//     brosh: animals.ruslan.bind(animals)
// }

// console.log("errrrrrrreuth4j");

// Dolev.brosh()


// // console.log(this);

// function addition(num1, num2) {
//     console.log(num1 + num2);
// }


// addition(2, 7)


// const addition1 = function (num1, num2) {
//     console.log(num1 + num2);
// }

// addition1(23, 78)

// const addition2 = (num1, num2) => { return num1 + num2 }
// const addition3 = num2 => console.log(num2)



// const num11 = addition2(8, 3)
// console.log(num11);



// console.log(this);



// // setTimeout(function () {
// //     console.log('Avi is shocked!!!!')
// // }, 10000)


const person = {
    tired: 'Yanir',
    stoned: 'Maoz',
    obj: {
        yanirAndNadiv: 'greaters',
        print: function () {
            console.log(this);

        }
    }

}

person.obj.print()

// setTimeout(() =>
//     console.log(this)
//     , 1000)


const plants = {
    tree: 'Oren',
    flower: 'Rose',
    nadiv() {
        console.log(this);
        setTimeout((function () {
            console.log(this);
        }).bind(this), 1000)

    }
}

plants.nadiv()

// const print = plants.nadiv

// print()


// const boundPrint = plants.nadiv.bind(plants)


// boundPrint()

window.console.log(this)