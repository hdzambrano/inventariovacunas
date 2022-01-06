import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/services/empledo/empleado.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

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
    //  login: ['', Validators.required],
    //  clave: ['', Validators.required],
      fenem: ['', Validators.required],
      direm: ['', Validators.required],
      tfmem: ['', Validators.required],
      stvem: ['', Validators.required],
      tpvem: ['', Validators.required],
      fevem: ['', Validators.required],
      ndvem: ['', Validators.required],
    });;

    this.empleadoService.getAllEmpleados().subscribe(resp => {
      this.empleados = resp;
    },
      error => { console.error(error) }
    )

  };

  guardar(): void {
    this.empleadoService.saveEmpleado(this.empleadoForm.value).subscribe((resp) => {
      //this.empledados = resp;
      //console.log(resp);
      this.empleadoForm.reset(); //limpia el form
      this.empleados=this.empleados.filter((empleado: { duiem: any; })=> resp.duiem!=empleado.duiem); //cuando actualice  
      this.empleados.push(resp); //refresca al crear registro pero me da error
    },
      error => { console.error(error) }

    )
  }


  editar(empleado:any){
    this.empleadoForm.setValue ({
        duiem: empleado.duiem,
        nomem: empleado.nomem,
        apeem: empleado.apeem,
        corem: empleado.corem,
        //login: [],
        //clave: [],
        fenem: [empleado.duiem],
        direm: [empleado.direm],
        tfmem: [empleado.tfmem],
        stvem: [empleado.stvem],
        tpvem: [empleado.tpvem],
        fevem: [empleado.fevem],
        ndvem: [empleado.ndvem],      
    })

    }


}
