import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  name:string = 'Enrique'
  edad:number = 18;
  img:string ='https://www.w3schools.com/howto/img_avatar.png'
  botonDesactivado: boolean = true
  
  persona={
    name: 'maria',
    edad: 10,
    cambio: ''
  }
  animalesedad:any={
    perro:10
  }
  

  public validacion : string ="hola"
  public toggleBoton():void{
    this.botonDesactivado= !this.botonDesactivado;
    //!->vuelve lo contrario
  }
  public incrementaredad():void{
    this.edad++
  }
  public bajaredad():void{
    this.edad--
  }
  public onscroll(event:Event):void{ //capturamos en evento e->nombre del evento :Event->tipo de dato en este caso es un evento
    const elemento =event.target as HTMLElement //se comportara como as HTMLElement para coger la propiedad de .scrollWidth
    console.log(elemento.scrollTop)

  }
  public key(e : Event):void{
    let eve=e.target as HTMLInputElement; //"se comportara como as HTMLInputElement" para coger la propiedad de .value, ojo aqui en typescript no se puede directamente coger el value asi que tenemos que decirle que es un elemento de html esto con as y el tipo de elemento en este caso HTMLInputElement asi nos dara todos los valores de esa parte, esto sucede porque es tipado typescript.
    console.log(eve.value)
    this.persona.name=eve.value // sobreescribe el nombre
  }

}
