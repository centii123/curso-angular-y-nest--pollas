import { Module } from '@nestjs/common';
import { TaskController } from './task.controller'; //ruta creada de nuestro
import { TaskService } from './task.service';
@Module({
    //partes basicas de un modulo
    imports: [], //modulos
  controllers: [TaskController], //controladores
  providers: [TaskService] //servicios
})
export class TaskModule {}
