import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceconcesionarioService } from 'src/app/service/serviceconcesionario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-concesionarios',
  templateUrl: './form-concesionarios.component.html',
  styleUrls: ['./form-concesionarios.component.css'],
})
export class FormConcesionariosComponent implements OnInit {

  concesionarioForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    direccione: new FormControl(''),
    sede: new FormControl(''),
  });
  router: any;
  constructor(private conceService: ServiceconcesionarioService, router:Router){}
  ngOnInit(): void {

  }
  addConcesionario(): void {
    console.log("Entro al boton ");

    let Concesionario = {
     id: this. concesionarioForm.get('id')?.value,
     nombre: this.concesionarioForm.get('nombre')?.value,
     direccion: this.concesionarioForm.get('direccion')?.value,
     sede: this.concesionarioForm.get('sede')?.value
    };

    this.conceService.crearConcesionario(Concesionario).subscribe(resp =>{
      console.log('$#$#$#$#$#$',resp);

      if(resp.status === "ok" && resp.code ==="200"){
        Swal.fire('Registro Exitoso')
        this.router.mavigate(['table-concesionario']);
      }
      else{
        Swal.fire("Registro fallido: " + resp.status)
      }
  });
  }
}
