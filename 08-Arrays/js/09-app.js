/* 

FOR 
EACH

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

carrito.forEach( function(producto){

    console.log(`${producto.nombre} - Precio: ${producto.precio}`)

})