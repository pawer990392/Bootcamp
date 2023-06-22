import { Component } from '@angular/core';
import { AnimappService } from '../animapp.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
//inyectar nuestro servicio en nuestro componente
  constructor(private animappService: AnimappService){

  }


  buscar:string ='';

  busqueda(){
    this.animappService.buscarGitfs(this.buscar);
    this.buscar='';
  }
}
