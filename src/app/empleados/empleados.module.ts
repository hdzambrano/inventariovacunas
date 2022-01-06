import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './page/registro/registro.component';
import { EmpRoutingModule } from './emp-routing.module';
import { ActualizarComponent } from './page/actualizar/actualizar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListadoComponent } from './page/listado/listado.component';

@NgModule({
  declarations: [
    RegistroComponent,
    ActualizarComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    EmpRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
        
  ]
})
export class EmpleadosModule { }
