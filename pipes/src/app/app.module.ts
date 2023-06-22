import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { PrincipalModule } from './principal/principal.module';
import { CompartidoModule } from './compartido/compartido.module';
import { AppRouterModule } from './app-router.module';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //los modulos va en la parte de imports
    MatCardModule,
    PrincipalModule,
    CompartidoModule,
    AppRouterModule
  ],
  providers: [
    {
      provide:LOCALE_ID, useValue:'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
