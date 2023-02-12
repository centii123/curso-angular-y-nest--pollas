import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= 'segundoProyecto';
  im!:string;
  public nombre:string = 'sebastian';
  paises:Array<string> = ['alemania','mais','madrid'];
  getName(): void{ //metodos
    console.log('hola')
  }
  decir(){
    document.write('mamama')
  }
}
