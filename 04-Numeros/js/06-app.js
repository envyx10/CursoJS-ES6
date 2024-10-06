/* 
    CONVERTIR
    STRINGS
    A 
    NUMEROS
 */

const numero1 = "20"   ;
const numero2 = "20.2" ;
const numero3 = "Uno"  ;
const numero4 = 20     ;

// Para ver el tipo de valor que tien
console.log(typeof(numero1));

// Para cambiarlo a tipo numerico
console.log(Number(numero1));

// Para cambiarlo a tipo numerico tipo Int
console.log(Number.parseInt(numero1));
console.log(Number.parseFloat(numero2));

// Not A Number
console.log(Number.parseFloat(numero3));
console.log(Number.parseFloat(numero4));

// Revisar si un numero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
console.log(Number.isInteger(numero2));
console.log(Number.isInteger(numero1));