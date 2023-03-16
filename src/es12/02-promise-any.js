const promise1 = new Promise((resolve, Reject) => Reject('Reject'));
const promise2 = new Promise((resolve, Reject) => resolve('Resolve'));
const promise3 = new Promise((resolve, Reject) => resolve('Resolve 2'));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));