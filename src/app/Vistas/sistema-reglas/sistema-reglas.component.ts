import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaReglasService } from 'src/app/Servicios/sistema-reglas.service';
import { Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sistema-reglas',
  templateUrl: './sistema-reglas.component.html',
  styleUrls: ['./sistema-reglas.component.css']
})
export class SistemaReglasComponent implements OnInit {
  today : any = new Date();
  usuario_Id : number = 0;
  formularioSR !: FormGroup;
  load : boolean = true;
  stateOptions: any[] = [];
  v_respiratorio : number = 2;
  v_fatiga : number = 2;
  v_dolorArticular : number = 1;
  v_cuelloHinchado : number = 2;
  v_debilidad : number = 2;

  constructor(private frmBuilder : FormBuilder,
                private sistemaReglasService : SistemaReglasService,
                  @Inject(SESSION_STORAGE) private storage: StorageService) {
    this.formularioSR = this.frmBuilder.group({
      Respiratorio : [null], 
      fatiga : [null],
      dolorArticular : [null],
      cuelloHinchado : [null],
      debilidadMuscular : [null],
    });
  }

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
    this.usuario_Id = parseInt(this.storage.get('Id_Usuario'));
  }

  liumpiarCampos(){
    this.load = true;
    this.v_respiratorio = 0;
    this.v_fatiga = 0;
    this.v_dolorArticular = 0;
    this.v_cuelloHinchado = 0;
    this.v_debilidad = 0;
  }

  consultar(){
    let info : any = {
      V_Respiratorio:this.v_respiratorio,
      V_Fatiga: this.v_fatiga,
      V_DolorArticular: this.v_dolorArticular,
      V_CuelloHinchado: this.v_cuelloHinchado,
      V_Debilidad: this.v_debilidad,
      Respuesta: 'si', 
      Fecha : this.today,
      Id_Usuario: this.usuario_Id,
    }
    this.sistemaReglasService.add_Sistemareglas(info).subscribe(datos_sr => {
      Swal.fire(datos_sr.informacion);
    }, error => {
      Swal.fire(error.informacion);
    });
  }

}
