/* 

OBJECT
.KEYS 
.VALUES
.ENTRIES

*/
const producto = {

    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true,

} ;

// Object.keys -  Nos devuelve un array con las llaves del objeto.
console.log(Object.keys(producto));

// Object.values - Nos devuelve los valores.
console.log(Object.values(producto));

// Object.entries - Nos devuelve todo, en pares
console.log(Object.entries(producto));
