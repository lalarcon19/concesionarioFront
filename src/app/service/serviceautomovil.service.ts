import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlAutomovil ="http://localhost:8083/vehiculo";


@Injectable({
  providedIn: 'root'
})
export class ServicecarService {

  constructor(private http:HttpClient) { }

  getAllCar():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlAutomovil+"/all")
  }
}
