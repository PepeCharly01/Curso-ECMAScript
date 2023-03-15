async function* otroGenerador() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = otroGenerador();
other.next().then(Response=> console.log(Response.value));
other.next().then(Response=> console.log(Response.value));
other.next().then(Response=> console.log(Response.value));
console.log('Hello');

async function arrayNames (array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayNames(['Carlos', 'Daniel', 'Efrain']);
console.log('After');