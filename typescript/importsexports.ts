import { calcularTotalPrecio, IProducto } from "./producto";


const listaProducto: IProducto[] = [

    {
        id:123,
        descripcion:"coca cola",
        precio:190
    },
    {
        id:1234,
        descripcion:"Savritones Grandes 190g",
        precio:54
    },
    {
        id:956,
        descripcion:"Botella de Pepsi",
        precio:27
    }
];

const totalLista=calcularTotalPrecio(listaProducto);
console.log(totalLista);