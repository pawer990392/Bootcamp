"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var producto_1 = require("./producto");
var listaProducto = [
    {
        id: 123,
        descripcion: "coca cola",
        precio: 190
    },
    {
        id: 1234,
        descripcion: "Savritones Grandes 190g",
        precio: 54
    },
    {
        id: 956,
        descripcion: "Botella de Pepsi",
        precio: 27
    }
];
var totalLista = (0, producto_1.calcularTotalPrecio)(listaProducto);
console.log(totalLista);
