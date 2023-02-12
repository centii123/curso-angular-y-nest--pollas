//contiene una parte de la aplicacion
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm'; //conector basede datos
import { User } from './baseDatos/tarea.entity';
import { Animos } from './baseDatos/animos.entity';
import { PersonasModule } from './personas/personas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //para configurar y conectar a la base de datos
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'nestjs',
      entities: [User,Animos], //esto para las entidades o para crear tablas
      synchronize: true //se sincroniza y la clase se va a actualizar en la base de datos igual o las migraciones
    }),
    TaskModule,
    PersonasModule
  ], //importa los modulos creamos por nosotros
  controllers: [AppController], //rutas exportadas o tambien llamadas controladores
  providers: [AppService, TaskService],
})
export class AppModule {}
