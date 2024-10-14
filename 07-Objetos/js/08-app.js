"use strict"; // Evalua el codigo de forma estricta.

/* 

CONGELAR 
UN
OBJETO

*/

const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true

} ;


// metodo freeze, el objeto producto aqui esta congelado, no se puede modificar...
Object.freeze(producto); 

/* producto.disponible = false; */
/* producto.imagen = "imagen.jpg"; */

console.log(producto);

// para comprobar si un objeto esta congelado
console.log(Object.isFrozen(producto));
