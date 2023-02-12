

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './componentes/layouts/layouts.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ProductosModule } from './modulos/productos/productos.module';
import { EmpleadosComponent } from './empleados/empleados.component';





@NgModule({
  declarations: [ //componentes creados por mi
    AppComponent,
    LayoutsComponent,
    FrutaComponent,
    EmpleadosComponent,


  ],
  imports: [
    BrowserModule, //comonentes de angular
    AppRoutingModule,
    FormsModule,
    ProductosModule //modulos creados antes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
