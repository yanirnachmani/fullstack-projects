const key1 = {
    a: 'a'
}


let key2 = {
    b: 'b'
}

const obj = {
    [key1]: 'value for key1',
    [key2]: 'value for key2'
}

console.log(obj);

console.log(obj['[object Object]']);


const map = new Map()

map.set('key1', 'value for key1')
map.set(key2, 'value for key2')

console.log(map);


console.log(map.get('key1'));


for (const [key, value] of map) {
    console.log(key, value);
}


map.delete('key1')


console.log(map.has('key1'));
console.log(map.has(key2));


console.log(map.size);


map.set('key3', 'value for key1')

map.set('key4', 'value for key1')

map.set('key5', 'value for key1')
for (const key of map.keys()) {
    console.log(key);

}



const weakmap = new WeakMap()

let key3 = {
    c: 'c'
}


weakmap.set(key3, 'this is a member of a weakmap')

console.log(weakmap);
key3 = null
key2.aaaaaa = 'ppppppp'


setTimeout(() => {
    console.log('=======');
    console.log(map);
    console.log(weakmap);
}, 100)

const privateData = new WeakMap()

class User {

    constructor(name, password) {
        this.name = name
        privateData.set(this, password)
    }

    getPassword() {
        return privateData.get(this)
    }
}

const user = new User('Maoz', 'password')


console.log(user.getPassword());





