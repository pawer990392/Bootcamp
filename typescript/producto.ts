export interface IProducto {
    id: number;
    descripcion: string;
    precio: number;
}

export function calcularTotalPrecio(producto: IProducto[]): number {

    let total = 0;
    producto.forEach((priceProd) => {
        total += priceProd.precio;
    })
    return total;
}