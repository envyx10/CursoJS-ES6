/* 

AGREGAR
O ELIMINAR 
PROPIEDADES
DE UN OBJETO

*/

// Definicion de objeto (Object literal)
const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true,
  

} ;

// Comprobamos los valores del objeto
console.log(producto);

// Agregar nuevas propiedades al objeto
// Al estar fuera del objeto ahora SI usamos el =
producto.imagen = "imagen.jpg"

// Aqui comprobamos que hemos añadido el valor imagen al objeto
console.log(producto);

// Para eleminar un propiedades de un objeto
delete producto.disponible;

// Comprobamos que disponible ya no se encuentra
console.log(producto);
