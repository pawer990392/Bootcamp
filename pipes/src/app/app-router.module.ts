import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './principal/basicos/basicos.component';
import { NumerosComponent } from './principal/numeros/numeros.component';
import { OtrosComponent } from './principal/otros/otros.component';

const routes:Routes=[

  //agregar las Rutas a utilizar
  {
    path:'',
    component:BasicosComponent,
    pathMatch:'full'
  },
  {
    path:'numero',
    component:NumerosComponent
  },
  {
    path:'otros',
    component:OtrosComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
