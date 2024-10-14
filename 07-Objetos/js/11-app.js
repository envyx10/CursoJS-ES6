/* 

FUNCIONES
EN OBJETOS Y 
ACCEDER A 
SUS VALORES

*/

const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true,

    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
        
    }


} ;

const producto2 = {

    //propiedad
    nombre: "Tablet" ,
    precio: 3000,
    disponible: true,

    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
        
    }

} ;

producto.mostrarInfo();
producto2.mostrarInfo();