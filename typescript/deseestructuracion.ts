interface IPeliculas {
    id: number;
    titulo: string;
    descripcion: string;
    year: number;
    director: IDirector;

}
interface IDirector {

    nombre: string;
    apellidos: string;
    edad: number;
}
const peliculas: IPeliculas = {

    id: 1,
    titulo: "Dragon Ball super Regreso de Broly",
    descripcion: "Es una anime japonesa que su personaje principal es llamado Goku",
    year: 2019,
    director: {
        nombre: "Miguel Angel",
        apellidos: "Garcia Martinez",
        edad: 23
    }

}
//para destructurar un proyecto debemos hgacerlo entre llaves
const { titulo, year, director } = peliculas;
const { nombre } = director;

//clg snipper
console.log(`pelicula por el director`, nombre);