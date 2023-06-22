var peliculas = {
    id: 1,
    titulo: "Dragon Ball super Regreso de Broly",
    descripcion: "Es una anime japonesa que su personaje principal es llamado Goku",
    year: 2019,
    director: {
        nombre: "Miguel Angel",
        apellidos: "Garcia Martinez",
        edad: 23
    }
};
//para destructurar un proyecto debemos hgacerlo entre llaves
var titulo = peliculas.titulo, year = peliculas.year, director = peliculas.director;
var nombre = director.nombre;
//clg snipper
console.log("pelicula por el director", nombre);
