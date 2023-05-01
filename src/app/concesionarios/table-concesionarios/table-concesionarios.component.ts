import { Component, OnInit } from '@angular/core';
import { Concesionario } from 'src/app/model/Concesionario';
import { ServiceconcesionarioService } from 'src/app/service/serviceconcesionario.service';

@Component({
  selector: 'app-table-concesionarios',
  templateUrl: './table-concesionarios.component.html',
  styleUrls: ['./table-concesionarios.component.css']
})
export class TableConcesionariosComponent implements OnInit{

  listConcesionario:Concesionario[]=[]

  constructor(private concesionarioService:ServiceconcesionarioService){

  }
  ngOnInit(): void {
      this.allConcesionario();
  }
  allConcesionario():void{
    this.concesionarioService.getAllConcesionario().subscribe(res=>{
      console.log(res);
      this.listConcesionario=res.data;
      console.log(this.listConcesionario)
    });
  }


}
