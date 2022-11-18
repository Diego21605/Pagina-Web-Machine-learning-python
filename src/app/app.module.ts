import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Primeng
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {DockModule} from 'primeng/dock';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {SelectButtonModule} from 'primeng/selectbutton';
import { PasswordModule } from "primeng/password";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './Vistas/inicio/inicio.component';
import { PrincipalComponent } from './Vistas/principal/principal.component';
import { SistemaReglasComponent } from './Vistas/sistema-reglas/sistema-reglas.component';
import { HttpClientModule } from '@angular/common/http';
import { PrediccionComponent } from './Vistas/prediccion/prediccion.component';
import { LoginComponent } from './Vistas/login/login.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: PrincipalComponent},
  {path: 'sistema-reglas', component: SistemaReglasComponent},
  {path: 'prediccion', component: PrediccionComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    SistemaReglasComponent,
    PrediccionComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,    
    TableModule,
    CalendarModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    AutoCompleteModule,
    DockModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ReactiveFormsModule,
    SelectButtonModule,
    PasswordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
