// para evitar errores con un modulo y su exportacion e importacion nombra los archivos con .mjs
const hello = () => {
    console.log('Hello');
}

export default hello;

// ejercicio

export async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{
                movie: "El despertar de los michis",
                year: 2021,
                protagonist: "Mr. Michi"
            }, {
                movie: "101 Michis",
                year: 2019,
                protagonist: "Tommy Michiguire"
            }]);
        }, 1000);
    });
}