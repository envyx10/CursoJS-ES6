/*  

PROBLEMAS 
CON 
LOS
OBJETOS

*/


// Definicion de objeto (Object literal)
const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true

} ;

/* 

// No se puede reasignar una varaible const

const nombreProducto = "Monitor";
nombreProducto = "table";

*/

// En cambio los objetos si
producto.disponible = false;
console.log(producto);
