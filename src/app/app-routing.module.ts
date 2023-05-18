import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import {LoginComponentComponent } from './template/usuario/login-usuario/login-component.component'
import { FormComponentComponent} from './template/usuario/form-usuario/form-component.component'
import { TableUsuarioComponent} from './template/usuario/table-usuario/table-usuario.component'
import { InicioComponentComponent } from './template/inicio-component/inicio-component.component'

import {AutomovilesComponent} from './automoviles/automoviles.component'
import {TableAutomovilesComponent } from './automoviles/table-automoviles/table-automoviles.component'
import {FormAutomovilesComponent} from './automoviles/form-automoviles/form-automoviles.component'

import {ConcesionariosComponent} from './concesionarios/concesionarios.component'
import {FormConcesionariosComponent} from './concesionarios/form-concesionarios/form-concesionarios.component'
import {TableConcesionariosComponent} from './concesionarios/table-concesionarios/table-concesionarios.component'

import {VentasComponent} from './ventas/ventas.component'
import {FormVentasComponent} from './ventas/form-ventas/form-ventas.component'
import {TableVentasComponent} from './ventas/table-ventas/table-ventas.component'
import { VistaAutomovilesComponent } from './automoviles/vista-automoviles/vista-automoviles.component';

const routes: Routes =[
  {path:'iniciarSesion',component:LoginComponentComponent},
  {path:'inicio', component: InicioComponentComponent},
  {path:'registrarse',component:FormComponentComponent},
  {path:'tableUsuarios', component:TableUsuarioComponent},

  {path:'automoviles',component: AutomovilesComponent},
  {path: 'tableAutomoviles',component:TableAutomovilesComponent},
  {path: 'formAutomoviles',component:FormAutomovilesComponent},
  {path: 'vistaAutomoviles', component:VistaAutomovilesComponent},

  {path:'concesionarios',component:ConcesionariosComponent},
  {path:'registrarConcesionario',component:FormConcesionariosComponent},
  {path:'tableConcesionarios',component:TableConcesionariosComponent},

  {path:'ventas',component:VentasComponent},
  {path:'formVentas',component:FormVentasComponent},
  {path:'tableVentas',component:TableVentasComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
