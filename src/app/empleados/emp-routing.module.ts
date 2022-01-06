import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './page/registro/registro.component';
import { ActualizarComponent } from './page/actualizar/actualizar.component';
import { ListadoComponent } from './page/listado/listado.component';

 const routes: Routes = [
  {
    path: '',
    children: [      
      {path: 'registro', component: RegistroComponent },
      {path: 'actualizar', component: ActualizarComponent },
      {path: 'listado', component: ListadoComponent },
      {path: '**', redirectTo : 'registro' },
    ]   
  }
  
 ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpRoutingModule { }
