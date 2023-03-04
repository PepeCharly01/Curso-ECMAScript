// arrays destructuring
let fruits = ['apple', 'Banana'];
let [a,b] = fruits;
console.log(a,b);
console.log(a, fruits[1]);

// object destructuring
let user = {userName: 'Carlos', age: 27};
let {userName, age} = user;
console.log(userName, age);
console.log(userName, user.age);

// spread operator

let person = {name: 'Carlos', age: 27};
let country = 'México';
let data = { id:1, ...person, country};
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,1,2,3);

// ejercicio 
function solution(
    json1 = { name: "Mr. Michi", food:"Pescado" }, 
    json2 = {age:12, color: "Blanco"}) {
        console.log(json1, json2);
        return {...json1, ...json2}
  }

  solution();
  solution({name:"Carlos", food:"Pizza"});