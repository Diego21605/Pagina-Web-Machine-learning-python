import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaReglasService } from 'src/app/Servicios/sistema-reglas.service';

@Component({
  selector: 'app-sistema-reglas',
  templateUrl: './sistema-reglas.component.html',
  styleUrls: ['./sistema-reglas.component.css']
})
export class SistemaReglasComponent implements OnInit {

  formularioSR !: FormGroup;
  load : boolean = true;
  stateOptions: any[] = [];
  v_respiratorio : number = 0;
  v_fatiga : number = 0;
  v_dolorArticular : number = 0;
  v_cuelloHinchado : number = 0;
  v_debilidad : number = 0;

  constructor(private frmBuilder : FormBuilder,
                private sistemaReglasService : SistemaReglasService) {
    this.formularioSR = this.frmBuilder.group({
      Respiratorio : [null], 
      fatiga : [null],
      dolorArticular : [null],
      cuelloHinchado : [null],
      debilidadMuscular : [null],
    });
  }

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Si', value: 1 },
      { label: 'No', value: 0 },
    ];
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
      v_repiratorio : this.v_respiratorio,
      v_fatiga : this.v_fatiga,
      v_dolor : this.v_dolorArticular,
      v_cuello : this.v_cuelloHinchado,
      v_debiliad : this.v_debilidad,
    }
    this.sistemaReglasService.prueba(this.v_respiratorio, this.v_fatiga, this.v_dolorArticular, this.v_cuelloHinchado, this.v_debilidad).subscribe(datos =>{
      for (let i = 0; i < datos.length; i++) {
        console.log(datos[i])
      }
    })
    this.sistemaReglasService.sistemaReglas(info).subscribe(datos_sr => {
      console.log(datos_sr)
    });
  }

}
