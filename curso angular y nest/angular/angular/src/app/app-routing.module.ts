import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './componentes/layouts/layouts.component';//componente

const routes: Routes = [
  { path: 'inicio', component:LayoutsComponent },
  { path: 'productos', loadChildren: () => import('./modulos/productos/productos.module').then(m => m.ProductosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
