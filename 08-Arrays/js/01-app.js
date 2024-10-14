/* 

CREAR
ARRAYS
EN JS

*/

// A diferencia de los objetos se crea con []
// Ademas uno tiene llave / valor y este solo valores.
const numeros = [

    10, // posicion 0
    20, // posicion 1
    30  // posicion 2

];

// Segunda forma ( no es popular )
const meses = new Array ("Enero" , "Febrero" , "Marzo");


console.log(numeros);
console.log(meses);

//

// Array que contiene datos de todo tipo 
const deTodo = [

    "Hola", 10, true, "si", null,
    {
        nombre:"Pablo",
        trabajo: "En proceso",
       
    },
    [1,2,3]

]

console.log(deTodo);
