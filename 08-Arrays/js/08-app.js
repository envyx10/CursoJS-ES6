const producto = {

    nombre: "Monito 20 pulgadas",
    precio: 300,
    disponible: true

};

// Destructuring ( objeto)
const {nombre, disponible} = producto;
console.log(disponible);

// Destructuring con Arrays
const numeros = [ 10 , 20, 30 , 40, 50];

const[primero, , segundo, ...tercero] = numeros;
console.log(primero, segundo, tercero);
