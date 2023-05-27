import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let urlBase = "http://localhost:8083/venta";


@Injectable({
  providedIn: 'root'
})
export class ServiceventaService {

  constructor(private http:HttpClient) { }

  getAllVenta():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/all")
   }

   crearVenta(data:any): Observable<ResponseI>{
    console.log("#######", data);
    return this.http.post <ResponseI>(urlBase + "/create", data);
   }

   actualizarVenta(data:any): Observable <ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
   }

   eliminarVenta (data:number): Observable<ResponseI>{
    console.log("#####", data);
    return this.http.get<ResponseI>(urlBase + "/delete/" + data);
   }

}
