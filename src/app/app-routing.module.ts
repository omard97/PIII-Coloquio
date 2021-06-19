import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent}, /* por defecto */
  { path: 'clientes', component: ClientesComponent},
   { path: 'inicio', component: InicioComponent}, /* por defecto */
   { path: '**', component: InicioComponent} /* por defecto */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
