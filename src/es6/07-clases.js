// declarando
class User {};
// instancia de clase
//const newUser = new User();

class user {
    // Metodos
    greeting() {
        return 'Hello';
    }
};

const Charlie = new user();
console.log(Charlie.greeting());
const Infamous = new user();
console.log(Infamous.greeting());

// constructor

class user {
    // Constructor
    constructor() {
        console.log('Nuevo Usuario')
    }
    greeting() {
        return 'Hello';
    }
}

const David = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}
const ana = new user ('Ana');
console.log(ana.greeting());

// setters getters 

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const charlie = new user('Charlie', 27);
console.log(charlie.uAge);
console.log(charlie.uAge = 20);