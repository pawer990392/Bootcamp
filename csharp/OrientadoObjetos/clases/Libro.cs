namespace OrientadoObjetos.clases
{
    //clase hijo
    public class Libro : Publicacion
    {

        public Libro(string titulo, string autor, int paginas) : base(titulo, autor, paginas)
        {


        }
        public override string ObtenerDescripcion()
        {
            return $"LIBRO: {this.Titulo} escrito por {this.Autor} con {this.Paginas} Paginas";
        }
    }
}