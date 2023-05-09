import { ResponseI } from '../model/ResponseI';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase = "http://localhost:8083/usuario";



@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  constructor(private http:HttpClient) { }

  getAllUser():Observable<ResponseI>{
   return this.http.get<ResponseI>(urlBase +"/all");
    //return this.http.get<ResponseI>("http://localhost:8083/usuario/all");
  }
   crearUsuario(data:any):Observable<ResponseI>{
    return this.http.post<ResponseI>(urlBase+"/create",data);
   }

  }

