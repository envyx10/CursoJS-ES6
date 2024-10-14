/*

AÑADIR
FUNCIONES
EN UN OBJETO

 */

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

// 
reproductor.reproducir("Linkin Park");
reproductor.crearPlaylist("This is linkin park");
reproductor.reproducirPlaylist("Nu-metal mix");

reproductor.pausar();
reproductor.borrar("Numb");

