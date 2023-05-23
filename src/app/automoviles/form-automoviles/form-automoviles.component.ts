import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicecarService } from 'src/app/service/serviceautomovil.service';
import Swal from 'sweetalert2';
import { TableAutomovilesComponent } from '../table-automoviles/table-automoviles.component';
import { TableUsuarioComponent } from 'src/app/template/usuario/table-usuario/table-usuario.component';

@Component({
  selector: 'app-form-automoviles',
  templateUrl: './form-automoviles.component.html',
  styleUrls: ['./form-automoviles.component.css']
})
export class FormAutomovilesComponent implements OnInit{

  automovilForm = new FormGroup({
    id: new FormControl (''),
    marca: new FormControl (''),
    modelo: new FormControl (''),
    placa: new FormControl(''),
    precio: new FormControl(''),
    color: new FormControl('')
  });

  router: any;
  constructor(private automovilService: ServicecarService, router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addAutomovil(): void{
    console.log("Entro al boton");

    let automovil = {
      id: this.automovilForm.get('id')?.value,
      marca: this.automovilForm.get('marca')?.value,
      modelo:this.automovilForm.get('modelo')?.value,
      placa:this.automovilForm.get('placa')?.value,
      precio:this.automovilForm.get('precio')?.value,
      color:this.automovilForm.get('color')?.value
    };

    this.automovilService.crearAutomovil(automovil).subscribe(resp=>{
      console.log("#$#$#$#$#$#$",resp);

      if(resp.status === 'ok' && resp.code === "200"){
        Swal.fire('Registro exitoso')
        this.router.navigate(['table-automovil'])
      }
      else{
        Swal.fire("Registro fallido: "+ resp.status)
      }
    })
  }

}
