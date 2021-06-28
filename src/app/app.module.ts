import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http' /* modulo http */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarCatalogoComponent } from './editar-catalogo/editar-catalogo.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClientesComponent,
    CatalogoComponent,
    NosotrosComponent,
    CrearClienteComponent,
    RegistrarseComponent,
    EditarCatalogoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /* importacion del modulo */
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
