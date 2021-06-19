import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent}, 
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
