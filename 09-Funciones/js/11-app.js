/* 

VENTAJAS 
DE ARROW
FUNCTIONS

*/

// Sin Arrow Functions
const aprendiendo1 = function (tecnologia) {
  console.log(`Aprendiendo ${tecnologia}`);
};

aprendiendo1(`JavaScript`);


// Con Arrow Functions 
const aprendiendo2 = (tecnologia) => {
console.log(`Aprendiendo ${tecnologia}`);
};

aprendiendo2(`JavaScript`);

// Aqui tambien al tener solo 1 parametro podemos incluso resumirlo aun mas quitando los ()
// Importante, si pasas dos parametros ES OBLIGATORIO poner los ()

const aprendiendo4 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo4(`JavaScript`);
  
// Con Arrow Functions con 1 sola linea tambien se pueden resumir asi :
const aprendiendo3 = () => `Aprendiendo JS`;
console.log(aprendiendo3());


