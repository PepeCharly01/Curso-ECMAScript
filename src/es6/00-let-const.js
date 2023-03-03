// variable con var
var lastName = 'David';
lastName = 'Carlos';
console.log(lastName);

// variable con let
let fruta = 'Manzana';
fruta = "Naranja";
console.log(fruta);

// variable con const, no se puede reaccinar au valor.
const animal = 'Dog';
animal = 'Gato';
console.log(animal);

const frutas = () => {
    if (true) {
        var fruta1 = 'Manzana'; // Global scope
        let fruta2 = 'Banana'; // Block scope
        const fruta3 = 'Pera'; // Block scope
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
}
frutas();