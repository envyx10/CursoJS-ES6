
/*  

COMO ACCEDER 
A LOS VALORES
DEL OBJETO

*/

// Definicion de objeto (Object literal)
const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true

} ;

// llamamos al objeto por consola
console.log(producto);

// Accedo a un valor en concreto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma menos común de hacerlo
console.log(producto['nombre']);
