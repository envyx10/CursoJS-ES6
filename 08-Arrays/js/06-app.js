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

// Forma declarativa  ( esta orientada a programacion funcional )
// Es lo mismo que .push

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado]


console.table(resultado);