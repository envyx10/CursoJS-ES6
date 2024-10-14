/* 

DIFERECIA 
ENTRE
FUNCTION EXPRESSION
Y
DECLARATION

*/
/* 

CREAR FUNCIONES 
EN
JS

*/


// Declaracion de funcion ( function declaration)

// Llamamos nuestra funcion
// Podemos llamar nuestra Funcion antes.

sumar();
function sumar() {

    //cuerpo de la funcion
    console.log(2+2);
    
};

//

// Segunda forma, expresion de Funcion
// No podemos llamar nuestra Funcion antes.
sumar2();
const sumar2 = function(){
    console.log(3+3);
    
}


