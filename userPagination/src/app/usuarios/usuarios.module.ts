import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListadoUsuariosComponent 
  ]
})
export class UsuariosModule { }
