import { Component } from '@angular/core';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.component.html',
  styleUrls: ['./otros.component.css']
})
export class OtrosComponent {

  nombre: string = "Mariana Garcia";
  genero: string = "femenino";

  bienvedidoMapa = {
    'masculino': 'Bienvenido',
    'femenino': 'Bienvenida'
  }

  usuarios:string[]=[
    'Mario',
    'Sergio',
  ]

  usuariosMapas={
    '=0':'No hay Usuarios en linea',
    '=1':'Tenemos un usuario en Linea',
    '=2':'Tenemos 2 usuarios en Linea',
    'other':'Tenemos # Usuarios en Linea'
  }


}
