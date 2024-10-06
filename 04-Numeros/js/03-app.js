
/* 
    OPERACIONES
    EN 
    JS 
*/

const a = 30 ;
const b = 20 ;

let resultado;

// PI
resultado = Math.PI

// Redondear
resultado = Math.round(2.8);

// Redondear hacia arriba forzosamente
resultado = Math.ceil(2.1);

// Redondead hacia abajo forzosamente
resultado = Math.floor(2.9);

// Raiz cuadrado
resultado = Math.sqrt(144);

// Valor absoluto ( ignora el negativo )
resultado = Math.abs(-220);

// Potencia
resultado = Math.pow(8,3);
resultado = Math.pow(2,4);

// Minimo
resultado = Math.min(3,5,-1,2,1341);

// Maximo
resultado = Math.max(3,5,1,5,1231);

// Random ( pocas veces da nunmeros enteros )
resultado = Math.random();

// Random dentro de un rango
resultado = Math.floor(Math.random() * 30 );
 
console.log(resultado);