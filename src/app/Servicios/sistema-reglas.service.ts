import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { modelSistemaReglas } from '../Models/modelSistemaReglas';
import { ruta_Api } from '../rutas-app';

@Injectable({
  providedIn: 'root'
})
export class SistemaReglasService {

  ruta = ruta_Api;
  constructor(private http : HttpClient,) { }

  prueba(v_repiratorio : any, v_fatiga : any, v_dolor : any, v_cuello : any, v_debiliad : any) {
    return this.http.get<any>(this.ruta + `/get/${v_repiratorio}/${v_fatiga}/${v_dolor}/${v_cuello}/${v_debiliad}`);
  }

  add_Sistemareglas(info : any): Observable<any> {
    return this.http.post(this.ruta + `/add_Sistemareglas`, info);
  }
}
