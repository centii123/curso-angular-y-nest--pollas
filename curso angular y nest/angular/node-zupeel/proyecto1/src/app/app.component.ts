import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personas={
    nombre:'enrique',
    apellido:'mera',
    edad: 10
  }
  valorcam:string="gg"

  public valorimput(e: Event):void{
    let valor=e.target as HTMLInputElement;
    console.log(valor.value)
    this.valorcam=valor.value
  }

}
