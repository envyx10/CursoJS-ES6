/* 

ARROW FUNCTION
EN EL REPRODUCTOR DE MUSICA
DEL EJ 09 

*/
/* 


// ANTES DE ARROWFUNCION
const reproductor = {

    reproducir: function(id){
    console.log(`Reproduciendo canción con el id numero: ${id}`); 
    },

    pausar: function(){
    console.log(`pausando `);
    },

    borrar: function(id){
    console.log(`Borrando canción - ${id}`);
    },

    crearPlaylist: function(nombre){
    console.log(`Creando la playlist de ${nombre}`);
    },

    reproducirPlaylist: function(nombre){
    console.log(`Esta reproduciendose en Spotify ${nombre}`);
    
    }

}

*/

// OBJETO CON FUNCIONES DENTRO CON ARROW FUNCTION 
const reproductor = {
    cancion: ``,
    reproducir: id => `Reproduciendo canción con el id numero: ${id}`,
    pausar: () => `pausando `, // Al no coger parametros dejamos ()
    borrar: id => `Borrando canción - ${id}`,
    crearPlaylist: nombre => `Creando la playlist de ${nombre}`,
    reproducirPlaylist: nombre => `Esta reproduciendose en Spotify ${nombre}`,
    
    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo la cancion: ${cancion}`);
    },
    
    get obtenerCancion(){ console.log(`${this.cancion}`);}

}

reproductor.nuevaCancion = `In the crown`;
reproductor.obtenerCancion;


console.log(reproductor.reproducir(`15`));
console.log(reproductor.pausar());
console.log(reproductor.borrar(`15`));
console.log(reproductor.crearPlaylist(`de nu-metal`));
console.log(reproductor.reproducirPlaylist(`Linkin Park`));
