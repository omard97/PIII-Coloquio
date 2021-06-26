import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



const routes: Routes = [
  { path: '', component: InicioComponent}, /* si la url esta vacia */ 
  { path: 'crear-cliente', component: CrearClienteComponent},
  { path: 'clientes', component: ClientesComponent},
   { path: 'inicio', component: InicioComponent}, 
   { path: 'catalogo', component: CatalogoComponent}, 
   { path: 'nosotros', component: NosotrosComponent},
   { path: '**', component: InicioComponent} /* por defecto */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
