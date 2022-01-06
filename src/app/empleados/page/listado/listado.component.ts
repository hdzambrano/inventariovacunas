import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empledo/empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  empleadoForm: FormGroup;
  empleados: any;

  constructor(
    public fb: FormBuilder,
    public empleadoService: EmpleadoService,
  ) {

  }

  ngOnInit(): void {
    this.empleadoForm = this.fb.group({
      duiem: ['', Validators.required],
      nomem: ['', Validators.required],
      apeem: ['', Validators.required],
      corem: ['', Validators.required],
   /*   login: ['', Validators.required],
      clave: ['', Validators.required],
      fenem: ['', Validators.required],
      direm: ['', Validators.required],
      tfmem: ['', Validators.required],
      stvem: ['', Validators.required],
      tpvem: ['', Validators.required],
      fevem: ['', Validators.required],
      ndvem: ['', Validators.required],*/
    });;

    this.empleadoService.getAllEmpleados().subscribe(resp => {
      this.empleados = resp;
    },
      error => { console.error(error) }
    )

  };

}
