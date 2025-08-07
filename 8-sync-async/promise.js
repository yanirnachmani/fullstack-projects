
// class Promise {
//   constructor(callback) {
//     this.status = 'pending';
//     this.data = undefined;
//     this.error = undefined;
//     this.callbackThen = null;
//     this.callbackCatch = null;
 
  
//     callback(this.resolve.bind(this), this.reject.bind(this));
 
//     while (this.status === 'pending') {
//       if (this.status === 'fulfilled') {
//         this.callbackThen(this.data);
//       }
//       if (this.status === 'rejected') {
//         this.callbackCatch(this.error);
//       }
//     }
//   }
 
//   resolve(data) {
//     this.status = 'fulfilled';
//     this.data = data;
//   }
 
//   reject(err) {
//     this.status = 'rejected';
//     this.error = err;
//   }
 
//   then(cbt) {
//     this.callbackThen = cbt;
//     return this;
//   }
 
//   catch(cbc) {
//     this.callbackCatch = cbc;
//     return this;
//   }
// }










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