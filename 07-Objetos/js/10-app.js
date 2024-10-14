/* 

UNIR
DOS
OBJETOS

*/

// Obj1
const producto = {

    //propiedad
    nombre: "Monitor de 20 pulgadas" ,
    precio: 300,
    disponible: true

} ;

// Obj2
const medidas = {
    peso: "1kg",
    medidas: "1m"

}


console.log(producto);
console.log(medidas);

// Forma para unir objetos
const resultado = Object.assign(producto,medidas);
console.log(resultado);


// Sprear Operator o Rest Operato  - forma dos de unir objetos
const resultado2 ={ ...producto, ...medidas };
console.log(resultado2);
