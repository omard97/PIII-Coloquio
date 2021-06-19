import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClientesComponent,
    CatalogoComponent,
    NosotrosComponent,
    CrearClienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
