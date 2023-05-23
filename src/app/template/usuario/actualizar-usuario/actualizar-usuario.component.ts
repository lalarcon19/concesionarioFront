import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServiceuserService } from 'src/app/service/serviceuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit{


usuarioSelecionado: any;
actualizarForm!: FormGroup;
private routeSubscription: Subscription = new Subscription;

  constructor (
    private fb: FormBuilder,
    private userService: ServiceuserService,
  ){ }

  ngOnInit():void {
     this.actualizarForm=new FormGroup({
        id: new FormControl(''),
        nombre: new FormControl(''),
        apellido: new FormControl(''),
        fechaNac: new FormControl(''),
        correo: new FormControl(''),
        documento: new FormControl(''),
        fechaIngreso: new FormControl(''),
        direccion: new FormControl(''),
        telefono: new FormControl(''),
        edad: new FormControl(''),
    });

  }

  actualizarUsuario() {
    const data = this.actualizarForm.value;
    this.userService.actualizarUsuario(data).subscribe(res => {
      if(res.status === 'CREATED'){
        console.log(res)
        Swal.fire ("Actualizacion exitosa");
        Swal.fire("Recargar la pagina");
      }
      else{
        Swal.fire("Hubo un error")
      }
    });
  }


}
