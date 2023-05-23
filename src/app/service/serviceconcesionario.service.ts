import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8083/concesionario";

@Injectable({
  providedIn: 'root'
})
export class ServiceconcesionarioService {

  constructor(private http:HttpClient) { }

  getAllConcesionario():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase +"/all")
  }

  crearConcesionario(data: any): Observable<ResponseI>{
    return this.http.put<ResponseI>(urlBase + "/create", data);
  }

  actualizarConcesionario(data: any): Observable <ResponseI> {
    return this.http.put<ResponseI>(urlBase + "/update", data);
  }

  eliminarConcesionario(data: number): Observable<ResponseI>{
    console.log("#######", data);
    return this.http.get<ResponseI>(urlBase + "/delete/" + data);
  }
}
