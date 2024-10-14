/* 

ARROW FUNCTION
CON FOREACH Y MAP

*/

//Array con objetos
const carrito = [
    {nombre: "Monito 20 Pulgadas", precio: 500},
    {nombre: "PC", precio: 2500},
    {nombre: "Movil", precio: 1500},
    {nombre: "Teclado", precio: 200},
    {nombre: "uriculares", precio: 100},
    {nombre: "Alfombrilla", precio: 20},

]

/* 

ANTES - SIN ARROW FUNCTION

// Te hace un array nuevo
const nuevoArray1 = carrito.map( function(producto){
    
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)
    
});

// For each no
const nuevoArray2 = carrito.forEach( function(producto){

    console.log(`${producto.nombre} - Precio: ${producto.precio}`)


}) 
    
*/

// DESPUES - CON ARROW FUNCTION
const nuevoArray1 = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}`);
carrito.forEach ( producto => `${producto.nombre} - Precio: ${producto.precio}`);


console.log(nuevoArray1);


