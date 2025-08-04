


function promiseCallback(resolve, reject) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/websites',
        success(data) {
            resolve(data)
        },
        error(err) {
            reject(err)
        }
    })
}

// const prom = new Promise(promiseCallback)

// prom.then((data) => {
//     console.log(data);

// })
// prom.catch((err) => {
//     console.log(err);
// })

(new Promise(promiseCallback))
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })