/* 

COMO SE COMUNICAN
LAS FUNCIONES

*/

iniciarApp(); // Siempre tiene que haber una funcion MAIN que inicie todo

function iniciarApp(){
    console.log("Iniciando App..");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funcion");
    usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario, espere...");
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}