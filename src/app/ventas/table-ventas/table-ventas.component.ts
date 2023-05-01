import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/model/venta';
import { ServiceventaService } from 'src/app/service/serviceventa.service';

@Component({
  selector: 'app-table-ventas',
  templateUrl: './table-ventas.component.html',
  styleUrls: ['./table-ventas.component.css']
})
export class TableVentasComponent implements OnInit{

  listVenta:Venta[]=[]

  constructor(private ventaService:ServiceventaService){

  }
  ngOnInit(): void {
      this.allVenta();
  }
  allVenta():void{
    this.ventaService.getAllVenta().subscribe(res=>{
      console.log(res);
      this.listVenta=res.data;
      console.log(this.listVenta)
    });
  }

}
