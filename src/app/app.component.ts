import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { EmpleadoService } from './services/empledo/empleado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


 // empleadoForm: FormGroup;
 // empleados: any;


  constructor(
    //public fb: FormBuilder,
    //public empleadoService: EmpleadoService,
  ) {

  }
  ngOnInit(): void {
    /*this.empleadoForm = this.fb.group({
      duiem: ['', Validators.required],
      nomem: ['', Validators.required],
      apeem: ['', Validators.required],
      corem: ['', Validators.required],
    });;

    this.empleadoService.getAllEmpleados().subscribe(resp => {
      this.empleados = resp;
    },
      error => { console.error(error) }
    )*/

  };




 /* guardar(): void {
    this.empleadoService.saveEmpleado(this.empleadoForm.value).subscribe((resp) => {
      //this.empledados = resp;
      //console.log(resp);
      this.empleadoForm.reset(); //limpia el form
      this.empleados=this.empleados.filter((empleado: { duiem: any; })=> resp.duiem!=empleado.duiem); //cuando actualice  
      this.empleados.push(resp); //refresca al crear registro pero me da error
    },
      error => { console.error(error) }

    )
  } */

/*  eliminar(empledo:any){
  this.empleadoService.deleteEmpleado(empledo.duiem).subscribe((resp) => {
    console.log(resp) ///lo coloque para efectos del desarrollo ver detalles en log, para Prod no debe ir!!
    if(resp==true){
      this.empleados.pop(this.empleados);
      this.empleados.push(resp); //refresca al crear registro pero me da error
    }
  })

  } */

/*  editar(empleado:any){
    this.empleadoForm.setValue ({
        duiem: empleado.duiem,
        nomem: empleado.nomem,
        apeem: empleado.apeem,
        corem: empleado.corem,     
    })

    }*/


}
