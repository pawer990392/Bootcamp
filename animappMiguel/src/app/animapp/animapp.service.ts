import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnimApp, Datos } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  appKey:string="HBhJWRgvQOUEqTqZlCGIS9gkrATJohZt";
  enlaceApp:string="https://api.giphy.com/v1/gifs/search?api_key"

  resultado:Datos[]=[];

  constructor(private http: HttpClient) { }
  //vamos a conectarnos un api 


  buscarGitfs(query:string) {
    this.http.get<IAnimApp>(`${this.enlaceApp}=${this.appKey}&q=${query}&limit=100`).subscribe(resp => {
      //console.log(resp.data);
      this.resultado=resp.data;
    })
  }


}
