import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { ServiceuserService } from 'src/app/service/serviceuser.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  usuarioForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    documento: new FormControl(''),
    direccion: new FormControl(''),
    fechaNac: new FormControl(''),
    edad: new FormControl(''),
    telefono: new FormControl(''),
    fechaIngreso: new FormControl(''),
  });
  constructor(private userService: ServiceuserService, router: Router) {}
  ngOnInit(): void {}
  addUsuario(): void {
    let usuario = {
      id: this.usuarioForm.get('id')?.value,
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      documento: this.usuarioForm.get('documento')?.value,
      direccion: this.usuarioForm.get('direccion')?.value,
      fechaNac: this.usuarioForm.get('fechaNac')?.value,
      edad: this.usuarioForm.get('edad')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
    };

    this.userService.crearUsuario(usuario).subscribe((resp) => {
      if (resp.status === 'ok') {
        alert('Registro exitoso');
      } else {
        alert('Error.');
      }
    });
  }

  
}
