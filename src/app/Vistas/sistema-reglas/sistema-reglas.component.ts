import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sistema-reglas',
  templateUrl: './sistema-reglas.component.html',
  styleUrls: ['./sistema-reglas.component.css']
})
export class SistemaReglasComponent implements OnInit {

  formularioSR !: FormGroup;
  load : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  exportToExcel(){

  }

  crearPDf(){
    
  }

}
