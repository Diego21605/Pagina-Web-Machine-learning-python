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
  city : string = '';
  stateOptions: any[] = [];
  value1 : number = 0;

  constructor(private frmBuilder : FormBuilder) {
    this.formularioSR = this.frmBuilder.group({
      Respiratorio : [null], 
      Respiratorio1 : [null], 
    });
  }

  ngOnInit(): void {
    this.stateOptions = [
      { label: 'Si', value: 1 },
      { label: 'No', value: 2 },
    ];
  }

  cambio(){
    console.log()
  }

}
