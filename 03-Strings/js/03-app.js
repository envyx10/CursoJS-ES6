// Concatenar lineas
const producto = 'Monitor 20 pulgadas '; 
const precio = '30 Euros '; 

// Metodo concat 
console.log(producto.concat(precio));

// Metodo concat con String
console.log(producto.concat('En descuento'));

// Otro metodo para concatenar
console.log(producto + precio);

// Otro metodo para concatenar
console.log(producto + "con un precio de " + precio);

// Otro metodo para concatenar - Anticuado
console.log("El producto: " + producto + "tiene un precio de: " + precio);
console.log("El producto: " , producto , "tiene un precio de: ", precio);

// template strings desde ES6 `` se llama backtip - forma mas optima
console.log(`EL producto: ${producto} tiene un precio de ${precio}`);
