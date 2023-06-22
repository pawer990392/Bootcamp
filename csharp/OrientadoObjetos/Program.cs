// See https://aka.ms/new-console-template for more information

using OrientadoObjetos.clases;

Libro librito = new Libro("Sombras y susurros: Vivencias extrañas y tenebrosas en la arqueología","Luis Alberto Lopez Warrios",1231);
Console.WriteLine(librito.ObtenerDescripcion()); 


Revista revista = new Revista("The new Start","Miguel Angel",120,200.50);
string resultado=revista.ObtenerDescripcion();
Console.WriteLine(resultado);
