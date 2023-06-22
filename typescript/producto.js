"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularTotalPrecio = void 0;
function calcularTotalPrecio(producto) {
    var total = 0;
    producto.forEach(function (priceProd) {
        total += priceProd.precio;
    });
    return total;
}
exports.calcularTotalPrecio = calcularTotalPrecio;
