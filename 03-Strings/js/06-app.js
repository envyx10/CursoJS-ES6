/* 
    SPLIT 
    AND 
    REPEAT 
*/
const producto = 'Monitor 20 pulgadas'; 

// .repeat te va a permitir repetir una cadena de texto...
const text = " En promocion" .repeat(3);
console.log(text);
console.log(`${producto} ${text} !!!`);

// .split nos permite dividir un string 
const actividad = "Estoy apreandiendo JS moderno";
console.log(actividad.split(" "));

const hobbies = "Leer,caminar,musica,escribir,aprender ";
console.log(hobbies.split(", "));

const twitt = "Aprendiendo #JSmoderno";
console.log(twitt.split("#"));