import { Data } from "@angular/router";

export interface User{
  id:number,
  nombre:String,
  apellido:String,
  correo:String,
  documento:number,
  fechaIngreso:Date,
  direccion:String,
  telefono:string,
  edad:number,
  fechaNac:Date
}
