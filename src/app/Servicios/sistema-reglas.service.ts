import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ruta_Api } from '../rutas-app';

@Injectable({
  providedIn: 'root'
})
export class SistemaReglasService {

  ruta = ruta_Api;
  constructor(private http : HttpClient,) { }

  sistemaReglas(v_repiratorio : any, v_fatiga : any, v_dolor : any, v_cuello : any, v_debiliad  : any){
    return this.http.get<any>(this.ruta + `/getSistemaReglas/${v_repiratorio}/${v_fatiga}/${v_dolor}/${v_cuello}/${v_debiliad}`);
  }
}
