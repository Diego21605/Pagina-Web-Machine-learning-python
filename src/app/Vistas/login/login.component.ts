import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioUsuario !: FormGroup;
  pass : any = '';
  
  constructor(private frmBuilderUsuario : FormBuilder,
                private usuarioService : UsuarioService,
                  @Inject(SESSION_STORAGE) private storage : StorageService) { 
    this.formularioUsuario = this.frmBuilderUsuario.group({
      User: [null, Validators.required],
      Contrasena: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  validarCamposVacios() : any{
    if(this.formularioUsuario.valid) this.Consulta();
    else Swal.fire("HAY CAMPOS VACIOS");
  }

  Consulta(){
    let id = this.formularioUsuario.value.User;
    let contrasena = this.formularioUsuario.value.Contrasena;
    this.usuarioService.cgetUsuario(id).subscribe(datos_usuario => {
      for (let i = 0; i < datos_usuario.length; i++) {
        if (datos_usuario[i].Contrasena == contrasena) {
          this.storage.set('Usuario', datos_usuario[i].Nombre);
          this.storage.set('Id_Usuario', datos_usuario[i].Id);
          window.location.href = './home';          
        } else Swal.fire(`¡El usuario y la contraseña no coinciden!`);
      }
    }, error => {
      Swal.fire(`¡EL numero de usuario ${id} no se encuentra resgitrado!`);
    });
  }
}
