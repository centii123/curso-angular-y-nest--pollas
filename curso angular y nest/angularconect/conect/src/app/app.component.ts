
import { AppService } from './app.service'; 
import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
 
  personas:any
  constructor(
     public conect:AppService
  ){}

  ngOnInit():void{
  
      console.log('hola')
        this.conect.getmas().subscribe((e)=>{
          
          this.personas= Object.values(e)
          console.log(this.personas)
    })
    

  }


}
