import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private API_SERVER = "http://localhost:8080/empleado/"

  constructor(
    private HttpClient: HttpClient
  ) { }

  //Lista los empleados 
  public getAllEmpleados(): Observable<any>{
       return this.HttpClient.get(this.API_SERVER);  
  }

  public saveEmpleado(empleado:any): Observable<any>{
    return this.HttpClient.post(this.API_SERVER,empleado);  
}

 public deleteEmpleado(duiem:any):Observable<any> {
    return this.HttpClient.delete(this.API_SERVER + "delete/" + duiem)
 }


}
