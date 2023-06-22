import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombre:string="miguel angel";
  apellidos:string="Garcia Martinez"
  nombreComleto:string=this.nombre+" "+this.apellidos;

  fecha:Date=new Date();
  

}
