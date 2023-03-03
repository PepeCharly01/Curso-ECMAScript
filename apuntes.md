# Historia de ECMAScript:
## ¿qué es ECMAScript?

- 1950 Inicio de las computadoras

- 1969 Se creo la red ARPANET,

- 1970-1990 Se explora ARPANET

- 1990 Tim Berners.lee dio pauta al internet y se conocio el termino World Wide Web (forma de acceder a archivos, documentos enlaces al alcanze de todos)

- 1993 Nacimiento de un Navegador.

- Universitarios pioneros escribieron un sofware simple que inicio una revolucion.

- Marc Andreessen: le dio vida a una gran empresa

- Netscape: Tenia un navegador que podias acceder a internet (HTML simple, enlaces, algunas fotografias)

- Browser wars: Guerra de los navegadores 
Microsoft en 1995 lanzó Internet Explorer, en la guerra nacieron tecnologias como CSS, conceptos como la empresa mozilla y JS.
- JS: Apareció en 4 de diciembre de 1995 Diseñado por Netscape Communications, Fundación Mozilla.

- Su primer nombre fue Mocha

- Luego LiveScript

- Finalmente JavaScript.

- Microsoft no se podia quedar atras y lanzo JScript y por eso tenermos ECMAScript (1997) permitio un estandar (serie de reglas que va a tener los lenguajes de programacion).

## ¿Qué es el TC39?
### TC39: 
- Es un grupo de hackers, academicos y/o personas afines a la tecnologia que se encargan de las actualizaciones, bajo el mando de ECMA.
### ESNext 
- Es un nombre que siempre indica la próxima versión de javascript y esto consta de los siguientes pasos:

- Stage0: Strawperson (borrador, cualquier persona puede tener una idea para implementar en el estandar)

- Stage1: Proposal (propuesta formal)

- Stage2: Draft (borrador, como va a funcionar la implementacion el impacto entre otros)

- Stage3: Candidate (se elige el candidato, vamos a tener una propuesta que va ayudar a mejorar el lenguaje.)

- Stage4: Finished (va a ser desplegada en la version normalmente en JUNIO)

## ES6 (2015)
- A partir de esta versión se hace referencia a “El gran cambio”

### let & const
- Nuevas palabras reservadas para guardar variables. Antes solo existía var.
- Let permite la reasignación de valores de una variable, con la particularidad de que solo tiene un alcance de bloque, mientras que var tiene un alcance global.
- Const, Sin embargo su valor no puede ser reasignado y también tiene alcance de bloque.

Todo lo que sea un bloque es lo que está entre llaves {}

### Arrow Functions
Es una alternativa compacta para declarar una function.
```js
const nombreFuncion (argumento) => {
    bloque de codigo;
}

const nombreFuncion = num => num * num;
```

