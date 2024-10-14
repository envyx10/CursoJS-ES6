/* 
ELIMINAR 
ELEMENTOS DE 
UN ARRAY

*/

/* 
AGREGAR
ARRAY CON
SPREAD OPERATOR

*/


const carrito = [];

const producto = {
    nombre: "Monitor 22",
    precio: "200Eu"
}

const producto2 = {
    movil: "Iphon",
    precio: "1500Eu"
}

const producto3 = {
    nombre: "teclado",
    precio: "150Eu"
}

const producto4 = {
    nombre: "PC",
    precio: "1250Eu"
}

carrito.unshift(producto3);



carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);


// Forma declarativa  ( esta orientada a programacion funcional )
// Es lo mismo que .push

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]


console.table(resultado);

// Eliminar el ultimo elemento de un array
carrito.pop();
console.table(carrito);

// Eliminar desde el inicio del Array
carrito.splice(1,1);
console.table(carrito);