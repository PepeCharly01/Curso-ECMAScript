
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Oscar', 'Carlos', 'Karen', 'Daniel', 'Efrain']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

console.log(it.next().value);

// solucion del ejercicio
function* getId() {
    let numero = 0;
    let id;
    while (true) {
      numero = numero+1;
      yield id = `M${numero}`;
    }
  }
  
  const id = getId();
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);