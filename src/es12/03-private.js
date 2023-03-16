// En las clases se pieden hacer metodos privados donde solo un usuario tiene privilegios de utilizar, en ese caso se pone el simbolo de # en frente de del metodo.

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const charlie = new user('Charlie', 27);
console.log(charlie.uAge);
console.log(charlie.uAge = 20);