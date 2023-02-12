
import { Component } from "@angular/core"; //primero exportamos el metodo component de angular

@Component({ //ejecutamos el componente @->llama Component->nombre ({pasamos los parametros en este objeto})
  selector: 'fruta', //la etiqueta donde se cargara el componente en este caso <fruta></fruta>
  template: `
  <h2>{{ nombreComponente }}</h2>
  <p>peras,manzanas,etc</p>` //plantilla de este componente en este caso tendra html
})

export class FrutaComponent{ //clase nomenclatura la primera letra con mayuscula y con el nombre del componente asi FrutaComponent, Component con mayuscula es obligatorio para crear esta clase
  public nombreComponente='hola';//variable y arriva imprimimos la variable
}
