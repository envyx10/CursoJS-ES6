/*  

SELLAR
UN 
OBJETO

*/

const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true

} ;


// metodo seal, sirve para sellar un objeto, no se puede agregar 
// o eliminar propiedades pero si modificar las existentes

Object.seal(producto); 
producto.disponible = false; 

// Comprobar si el objeto esta sellado
console.log(Object.isSealed(producto));
