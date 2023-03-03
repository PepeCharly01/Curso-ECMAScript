// función normal.
function square(num) {
    return num * num;
}
// es una arrow function.
const square = (num) => {
    return num * num;
}
// es igual pero con el return implicito, solo si tienes un argumento.
const square = num => num * num;