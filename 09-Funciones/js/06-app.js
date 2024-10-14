/* 

PARAMETROS POR
DEFECTO

 */

/* 

PARAMETROS
Y 
ARGUMENTOS EN
FUNCIONES

*/


//Funcion de saludar
                        // Poner un valor por defecto
function saludar( nombre = " Desconocido " , apellido = ""){

    console.log(`Hola ${nombre} ${apellido}`);
    
}

saludar("Pablo", "Diaz");
saludar("Pablo");
saludar("");