import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceventaService } from 'src/app/service/serviceventa.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-ventas',
  templateUrl: './form-ventas.component.html',
  styleUrls: ['./form-ventas.component.css']
})
export class FormVentasComponent implements OnInit{

  ventaForm = new FormGroup ({
      id: new FormControl(''),
      fecha: new FormControl(''),
      valor: new FormControl('')
  });

  router: any;
  constructor (private ventaService: ServiceventaService, router: Router){}

  ngOnInit(): void {
  }

  addVenta(): void {
    console.log("Entro al boton");

    let venta = {
      id: this.ventaForm.get('id')?.value,
      fecha: this.ventaForm.get('fecha')?.value,
      valor: this.ventaForm.get('valor')?.value
    };

    this.ventaService.crearVenta(venta).subscribe(resp =>{
     console.log("#$#$#$", resp);

     if (resp.status === "ok" && resp.code === "200"){
      Swal.fire('Registro exitoso')
     }
     else{
      Swal.fire('Registro fallido'+ resp.status)
     }
    });
  }

}
