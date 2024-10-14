/* 

AÑADIR NUEVOS
ELEMENTOS

*/


const meses = ["Enero", "Febrero", "Marzo"];


// Añadir un nuevo mes
// desventaje, tienes que conocer la posicion de array.
meses[3] = "abril"

// Variante - Agregar al final del array sin conocer la psicion
meses.push("Abril");
meses.push("Mayo");

console.table(meses);


const carrito = [];

// Definir un producto

const producto = {
    nombre: "Monitor 22",
    precio: "200Eu"
}

const producto2 = {
    movil: "Iphon",
    precio: "1500Eu"
}

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: "teclado",
    precio: "150Eu"
}

// Se pone el primero en la fila
carrito.unshift(producto3)
console.table(carrito)