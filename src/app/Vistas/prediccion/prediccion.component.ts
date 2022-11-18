import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PrediccionService } from 'src/app/Servicios/prediccion.service';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {

  today : any = new Date();
  usuario_Id : number = 0;
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

  constructor(private predictService : PrediccionService,    
                @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    this.fecha();
    this.lecturaStorage();
    this.stateOptions = [
      { label: 'Si', value: 1 },
      { label: 'No', value: 0 },
    ];
  }

  //Funcion que colocará la fecha actual y la colocará en el campo de fecha de pedido
  fecha(){
    this.today = new Date();
    var dd : any = this.today.getDate();
    var mm : any = this.today.getMonth() + 1;
    var yyyy : any = this.today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    this.today = yyyy + '-' + mm + '-' + dd;
  }
  
  //Funcion que leerá la informacion que se almacenará en el storage del navegador
  lecturaStorage(){
    this.usuario_Id = this.storage.get('Id_Usuario');
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
    let precio : number;
    this.predictService.getAllTrainPredict(this.totalBateria, this.bluetooth, this.procesador, this.dualSim, this.mgPixelesFront, this.tecnology4G, this.internalMemory, this.m_dep, this.peso_Telefono, this.number_cores, this.mgPixelesPrimeary, this.px_height, this.px_widht, this.ram_memory, this.sc_h, this.sc_w, this.time_charger, this.tecnologia_3g, this.pantalla_tactil, this.wifi).subscribe(datos_prediccion => {
        if (datos_prediccion.informacion == 'El costó será : Low Cost') precio = 1;
        if (datos_prediccion.informacion == 'El costó será : Medium Cost') precio = 2;
        if (datos_prediccion.informacion == 'El costó será : High Cost') precio = 3;
        if (datos_prediccion.informacion == 'El costó será : Very High Cost') precio = 4;
        setTimeout(() => {
          let data : any = {
            Fecha : this.today,
            Usuario_Id : this.usuario_Id,
            totalBateria : this.totalBateria,
            bluetooth : this.bluetooth,
            procesador : this.procesador,
            dualSim : this.dualSim,
            mgPixelesFront : this.mgPixelesFront,
            tecnology4G : this.tecnology4G,
            internalMemory : this.internalMemory,
            m_depp : this.m_dep,
            peso_Telefono : this.peso_Telefono,
            number_cores : this.number_cores,
            mgPixelesPrimeary : this.mgPixelesPrimeary,
            px_height : this.px_height,
            px_widht : this.px_widht,
            ram_memory : this.ram_memory,
            sc_h : this.sc_h,
            sc_w : this.sc_w,
            time_charger : this.time_charger,
            tecnologia_3g : this.tecnologia_3g,
            pantalla_tactil : this.pantalla_tactil,
            wifi : this.wifi,
            Precio : precio,
          }
          this.predictService.add_Predict(data).subscribe(datos => {
            Swal.fire(`${datos_prediccion.informacion} - - `+datos.informacion);
          }, error => {Swal.fire("Error al guardar los datos de la predicción")});          
        }, 1000);
    }, error => { Swal.fire("Error al hacer la predicción"); });
  }
}
