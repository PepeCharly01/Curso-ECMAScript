const promise1 = new Promise((resolve, Reject) => Reject('Reject'));
const promise2 = new Promise((resolve, Reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, Reject) => resolve('Resolve 2'));

Promise.allSettled([promise1, promise2, promise3])
    .then(Response => console.log(Response));

// resolve y reject no son palabras reservadas pero son comunmente utilizadas en la comunidad.