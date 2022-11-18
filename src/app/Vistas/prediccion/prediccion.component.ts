import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {

  load : boolean = true;
  formularioPrediccion !: FormGroup;
  stateOptions: any[] = [];
  totalBateria : number = 0;
  bluetooth : number = 0;
  procesador : number = 0;
  dualSim : number = 0;
  mgPixelesFront : number = 0;
  tecnology4G : number = 0;
  internalMemory : number = 0;
  m_dep : number = 0;
  peso_Telefono : number = 0;
  number_cores : number = 0;
  mgPixelesPrimeary : number = 0;
  px_height : number = 0;
  px_widht : number = 0;
  ram_memory : number = 0;
  sc_h : number = 0;
  sc_w : number = 0;
  time_charger : number = 0;
  tecnologia_3g : number = 0;
  pantalla_tactil : number = 0;
  wifi : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Si', value: 1 },
      { label: 'No', value: 0 },
    ];
  }

  limpiarCampos(){
    this.load = true;
    this.totalBateria = 0;
    this.bluetooth = 0;
    this.procesador = 0;
    this.dualSim = 0;
    this.mgPixelesFront = 0;
    this.tecnology4G = 0;
    this.internalMemory = 0;
    this.m_dep = 0;
    this.peso_Telefono = 0;
    this.number_cores = 0;
    this.mgPixelesPrimeary = 0;
    this.px_height = 0;
    this.px_widht = 0;
    this.ram_memory = 0;
    this.sc_h = 0;
    this.sc_w = 0;
    this.time_charger = 0;
    this.tecnologia_3g = 0;
    this.pantalla_tactil = 0;
    this.wifi = 0;
  }

  consultar(){
    
  }
}
