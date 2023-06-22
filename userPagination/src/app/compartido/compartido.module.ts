import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    //no podemos meter compoente 
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CompartidoModule { }
