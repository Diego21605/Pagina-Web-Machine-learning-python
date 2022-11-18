import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioUsuario !: FormGroup;
  pass : any = '';
  
  constructor(private frmBuilderUsuario : FormBuilder,) { 
    this.formularioUsuario = this.frmBuilderUsuario.group({
      Identificacion: [, Validators.required],
      Contrasena: [, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  validarCamposVacios() : any{
    if(this.formularioUsuario.valid) this.Consulta();
    else Swal.fire("HAY CAMPOS VACIOS");
  }

  Consulta(){
  }
}
