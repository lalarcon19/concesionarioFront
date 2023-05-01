import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8083/venta";


@Injectable({
  providedIn: 'root'
})
export class ServiceventaService {

  constructor(private http:HttpClient) { }

  getAllVenta():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/all")
    
  }
}
