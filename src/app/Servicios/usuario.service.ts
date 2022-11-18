import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ruta_Api } from '../rutas-app';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ruta = ruta_Api;
  constructor(private http : HttpClient,) { }

  cgetUsuario(id : number){
    return this.http.get<any>(this.ruta + `/getUsuario/${id}`);
  }
}
