const fsAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        : reject (new Error('Error'));
    });
}

const otraFnAsync = async () => {
    const algo = await fsAsync();
    console.log(algo);
    console.log('Hola');

}

console.log('Antes');
otraFnAsync();
console.log('Despues');