import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { MenuComponent } from './template/menu/menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';

import { InicioComponentComponent } from './template/inicio-component/inicio-component.component';;
import {LoginComponentComponent } from './template/usuario/login-usuario/login-component.component';
import { FormComponentComponent } from './template/usuario/form-usuario/form-component.component';
import { TableUsuarioComponent } from './template/usuario/table-usuario/table-usuario.component';
import { ServiceuserService } from './service/serviceuser.service';

import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { TableConcesionariosComponent } from './concesionarios/table-concesionarios/table-concesionarios.component';
import { FormConcesionariosComponent } from './concesionarios/form-concesionarios/form-concesionarios.component';

import { AutomovilesComponent } from './automoviles/automoviles.component';
import { TableAutomovilesComponent } from './automoviles/table-automoviles/table-automoviles.component';
import { FormAutomovilesComponent } from './automoviles/form-automoviles/form-automoviles.component';

import { VentasComponent } from './ventas/ventas.component';
import { TableVentasComponent } from './ventas/table-ventas/table-ventas.component';
import { FormVentasComponent } from './ventas/form-ventas/form-ventas.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    InicioComponentComponent,
    LoginComponentComponent,
    FormComponentComponent,
    TableUsuarioComponent,

    ConcesionariosComponent,
    TableConcesionariosComponent,
    FormConcesionariosComponent,
    AutomovilesComponent,
    TableAutomovilesComponent,
    FormAutomovilesComponent,
    VentasComponent,
    TableVentasComponent,
    FormVentasComponent,



  ],
  imports: [

    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServiceuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
