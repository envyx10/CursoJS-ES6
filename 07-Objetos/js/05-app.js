/* 

OBJETOS
DENTRO DE 
OBJETOS

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

console.log(producto);
// Para obtener concretamente el que busco
console.log(producto.informacion.fabricacion.pais);



