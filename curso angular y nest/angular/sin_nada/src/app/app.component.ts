import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'sin_nada';
  numero:number = 30;
  persona:any={
    nombre:'enrique'
  };
  public final:any;
  public enviar():any {
    this.final=this.persona
    console.log(this.final)
  }
}
