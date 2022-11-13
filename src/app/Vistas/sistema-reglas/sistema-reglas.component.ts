import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistema-reglas',
  templateUrl: './sistema-reglas.component.html',
  styleUrls: ['./sistema-reglas.component.css']
})
export class SistemaReglasComponent implements OnInit {

  formularioSR !: FormGroup;
  load : boolean = true;
  stateOptions: any[] = [];
  value1 : number = 0;
  value2 : number = 0;
  value3 : number = 0;
  value4 : number = 0;
  value5 : number = 0;

  constructor(private frmBuilder : FormBuilder) {
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
      { label: 'No', value: 2 },
    ];
  }

  liumpiarCampos(){
    this.load = true;
    this.value1 = 0;
    this.value2 = 0;
    this.value3 = 0;
    this.value4 = 0;
    this.value5 = 0;
  }

  cambio(){
    console.log()
  }

}
