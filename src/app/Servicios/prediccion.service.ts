import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ruta_Api } from '../rutas-app';

@Injectable({
  providedIn: 'root'
})
export class PrediccionService {

  ruta = ruta_Api;
  constructor(private http : HttpClient,) { }

  getAllTrainPredict(data : any) {
    return this.http.get<any>(this.ruta + `/getAllTrainPredict`);
  }

  add_Predict(info : any): Observable<any> {
    return this.http.post(this.ruta + `/add_Predict`, info);
  }
}
