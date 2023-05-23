import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

let urlBase ="http://localhost:8083/vehiculo";


@Injectable({
  providedIn: 'root'
})
export class ServicecarService {

  constructor(private http:HttpClient) { }

  getAllCar():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/all")
  }

  crearAutomovil(data: any): Observable<ResponseI>{
    console.log('######',data);
    return this.http.post<ResponseI>(urlBase + "/create", data);
  }

  actualizarAutomovil(data:any): Observable <ResponseI> {
    return this.http.put<ResponseI> (urlBase+ "/update", data);
  }

  eliminarAutomovil(data:number): Observable<ResponseI>{
    console.log("#######", data);
    return this.http.get<ResponseI>(urlBase + "/delete" + data);
  }
}
