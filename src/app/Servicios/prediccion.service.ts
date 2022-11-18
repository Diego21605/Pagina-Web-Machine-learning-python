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

  getAllTrainPredict(totalBateria : number, bluetooth : number, procesador : number, dualSim : number, mgPixelesFront : number, tecnology4G : number, internalMemory : number, m_depp : number, peso_Telefono : number, number_cores : number, mgPixelesPrimeary : number, px_height : number, px_widht : number, ram_memory : number, sc_h : number, sc_w : number, time_charger : number, tecnologia_3g : number, pantalla_tactil : number, wifi : number) {
    return this.http.get<any>(this.ruta + `/getAllTrainPredict/totalBateria/bluetooth/procesador/dualSim/mgPixelesFront/tecnology4G/internalMemory/m_depp/peso_Telefono/number_cores/mgPixelesPrimeary/px_height/px_widht/ram_memory/sc_h/sc_w/time_charger/tecnologia_3g/pantalla_tactil/wifi`);
  }

  add_Predict(info : any): Observable<any> {
    return this.http.post(this.ruta + `/add_Predict`, info);
  }
}
