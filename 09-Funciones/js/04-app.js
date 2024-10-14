/* 

DIFERENCIA
ENTRE
FUNCION Y METODO 

*/

const num1 = 20;
const num2 = "20";

console.log(parseInt(num2));  // Esto es una función
console.log(num1.toString()); // Esto es un método

function sumar() {

    //cuerpo de la funcion
    console.log(2+2);
    
};

sumar();