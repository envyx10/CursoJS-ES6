// Replace , Slice , Substring
const producto = 'Monitor 20 pulgadas'; 
console.log(producto);

// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .Slice para corta
// Especificamos inicio y fin
console.log(producto.slice(0,10));
console.log(producto.slice(8))
// Si el primer numero es mayor al segundo, no hace nada
console.log(producto.slice(2,1));

// .Substring ( alternativa al slice)
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));

const nombre = "Pablo";
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));