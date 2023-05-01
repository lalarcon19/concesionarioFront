import { Component, OnInit } from '@angular/core';
import { Automovil} from 'src/app/model/Automovil';
import { ServicecarService } from 'src/app/service/serviceautomovil.service';

@Component({
  selector: 'app-table-automoviles',
  templateUrl: './table-automoviles.component.html',
  styleUrls: ['./table-automoviles.component.css']
})
export class TableAutomovilesComponent implements OnInit{

  listCar:Automovil[]=[]

  constructor(private carService:ServicecarService){

  }
  ngOnInit(): void {
      this.allCar();
  }
  allCar():void{
    this.carService.getAllCar().subscribe(res=>{
      console.log(res);
      this.listCar=res.data;
      console.log(this.listCar)
    });
  }

}
