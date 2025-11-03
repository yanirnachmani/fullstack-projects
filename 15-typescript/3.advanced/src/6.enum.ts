enum Types {
    animals,
    plants,
    inanimate
}

interface TypesObj  {
    animals : string,
    plants: string,
    inanimate: string
}

console.log(Types.animals)
console.log(Types.plants)
console.log(Types.inanimate)

// enum Types1 {
//     animals = 'animals',
//     plants = 'hufh',
//     inanimate = 'dhjftu4it7'
// }

// console.log(Types1.plants)

function whatHappened(types: Types){

}

whatHappened(Types.animals)