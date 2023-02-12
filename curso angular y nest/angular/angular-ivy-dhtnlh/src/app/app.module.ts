import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//primer paquete de angular esto para formularios

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent ],
  imports:      [ BrowserModule, FormsModule ], //importamos formsModule
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
