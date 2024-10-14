
/* 

DESTRUCTION 
DE OBJETOS

*/

const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true,
  
} ;

// Extraemos nombre del objeto ( destructuring )
// Puedo extraer mas llaves siempre que sean del mismo objetos
const { nombre, precio } = producto;
console.log(nombre,precio);
