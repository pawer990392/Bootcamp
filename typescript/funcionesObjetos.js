var deuda = function (cliente, monto) {
    cliente.credito += monto;
};
var clientNew = {
    nombre: "Miguel Angel",
    apellidos: "Garcia Martinez",
    credito: 1000,
    mostrarCliente: function () {
        console.log("Credito del cliente: ".concat(this.nombre, " ").concat(this.apellido, " es ").concat(this.credito));
    }
};
deuda(clientNew, 800);
clientNew.mostrarCliente();
