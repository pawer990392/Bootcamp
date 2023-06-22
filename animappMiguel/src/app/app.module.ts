import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimappModule } from './animapp/animapp.module';

import { AppComponent } from './app.component';
import { CompartidoModule } from './compartido/compartido.module';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CompartidoModule,
    AnimappModule,
    //ver esta parte de video semana 4 minutis 1:49 horas
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
