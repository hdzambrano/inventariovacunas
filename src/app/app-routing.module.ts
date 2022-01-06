import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'empleados',
    loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule )   
  },
  {
    path: '**', 
    redirectTo: 'empleados' 
  }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
