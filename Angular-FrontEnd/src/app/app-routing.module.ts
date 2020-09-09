import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Subcategoria/listar/listar.component';
import { CrearComponent } from './Subcategoria/crear/crear.component';
import { DetallesComponent } from './Subcategoria/detalles/detalles.component';

const routes: Routes = [
  {path: 'listar',component: ListarComponent},
  {path:'add',component: CrearComponent},
  {path:'details',component: DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
