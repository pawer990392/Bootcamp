import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompartidoModule } from './compartido/compartido.module';
import { MaterialModule } from './material/material.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //el import solo para eportar modulos
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CompartidoModule,
    MaterialModule,
    UsuariosModule
  ],
  //cuando se crea un componete usario ejemplo componente lkistado debe mos exportado para que sea visible a otros modulos
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
