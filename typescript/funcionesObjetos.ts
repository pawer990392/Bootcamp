interface ICliente {
    nombre: string;
    apellidos: string;
    credito: number;
    mostrarCliente: () => void;
    direccion:IDireccion
}
interface IDireccion {
    nombreCalle: string;
    nombreColonia: string;
    ciudad: string;
}

const pagar = (cliente: ICliente, monto: number): void => {

    cliente.credito += monto;
}

const newCliente: ICliente = {
    nombre: "Miguel Angel",
    apellidos: "Garcia Martinez",
    credito: 1000,
    mostrarCliente() {
        console.log(`Credito del cliente: ${this.nombre} ${this.apellido} es ${this.credito}`);
    },
    direccion: {
        nombreCalle: "Camelia Oreinte",
        nombreColonia: "Francisco Sarabia",
        ciudad: "Puebla"
    }
}

pagar(newCliente,800);
newCliente.mostrarCliente();

