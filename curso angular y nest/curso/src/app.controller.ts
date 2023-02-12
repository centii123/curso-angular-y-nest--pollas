//rutas de servidor
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; //parte logica

@Controller()
export class AppController {
  
  constructor(private appService:AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); //de la parte logica
    //return 'testing';
  }
}
