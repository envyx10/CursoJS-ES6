

/* 

ACCEDER A 
VALORES DE UN
ARRAY

*/  

const numeros = [10,20,30,40,50, [1,2,3]];
console.log(numeros);

// Vemos el indice - valor en formato table, viene muy bien
console.table(numeros);

// Acceder a un Array
console.log(numeros[0]);

// Acceso al subArray
console.log(numeros[5][2]);
