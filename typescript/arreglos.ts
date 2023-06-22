//arreglos
let personas : string[]= ['Mariana','viviana'];

personas.push('Perla');


//Interfaces
interface IEmpleado{
    nombre:string;
    apellido:string;
    direccion:string;
    telefonos:string[];
    sexo:string;
    sueldo :number;
    cargo?  :string;
    //https://www.youtube.com/watch?v=eRYtR4pFtrY

}
//objetos 
const empleados : IEmpleado = {
    nombre:"Miguel Angel",
    apellido:"Martinez",
    direccion:"Francisco Sarabia 122 Los capos",
    telefonos: ['2382384567','2382036433'],
    sexo:'Hombre',
    sueldo:5000
}




  