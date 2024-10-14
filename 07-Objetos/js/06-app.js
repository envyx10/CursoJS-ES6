

/*  

DESTRUCTURING
DE OBJETOS
ANIDADOS
*/


// Objeto dentro de otro objeto dentro de otro
const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true,

    informacion: {
        
        medidas:{
            peso:  "1kg",
            medida: "1m"
        } ,

        fabricacion:{
            pais: "España",

        }
    }
  
} ;

const { nombre, informacion, informacion: { fabricacion: { pais } } } = producto;
console.log(pais);
