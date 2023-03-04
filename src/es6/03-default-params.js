function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

newUser();
newUser('Carlos', 27, 'México');

function newAdmin (name = 'Alejandro', age = 32, country = 'Chile') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Efrain', 27, 'Peru');