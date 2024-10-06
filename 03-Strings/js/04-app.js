
// Cortar espacios en blanco
const producto = '               Monitor 20 pulgadas               '; 
console.log(producto);
console.log(producto.length);

// Sirve cuando no es necesario eliminar un espacio en ambas direcciones y queremos elegir que lado concretamente
// Eliminar espacio del inicio...
console.log( producto.trimStart() );
// Eliminar espacio del final...
console.log( producto.trimEnd() );
// Con este metodo cortamos de principio y de final de una sola vez ( son metodos nuevos )
console.log( producto.trimStart().trimEnd());