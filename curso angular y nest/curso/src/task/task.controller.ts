//nueva ruta /task en el navegador
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'; //Body-> recibir un cuerpo o json, param-> para parametros de delete
import { CreateTaskDTO } from './DTO/create-task.dto'; //interfase pero solo para transferencia de datos, para saber el tipo de datos y q datos ingresan


@Controller('task')
export class TaskController {
  @Get('get')
  getTask(): /*string*/ {"hola":number} {
    //podemos indicar que estamos devolviendo un string
    //para devolver objetos usamos {}
    return {"hola": 12}; //para devolver objetos usamos {}
  }

  @Post()
  createtask(@Body() task: CreateTaskDTO): string { //body para ingresar algo puede ser un json
    console.log(task.name, task.descirpcion)
    return 'introducido';
  }

  @Put(':id')
  actualizar(@Body() newParametros,@Param('id') idnew):string {
    console.log(newParametros) //nuevos datos a actualizar
    console.log(idnew) //id tarea a actualizar
    return 'actualizar';
  }

  @Delete(":id") //el :id-> es para decir que va a venir un parametro tipo eliminar/id
  eliminar(@Param('id') idtask:number):string{ //param->para el parametro y ('id')-> el id de arriba que va a llegar idtask ->donde lo guadaremos
    console.log(idtask)
    return 'eliminar la tarea de tipo '+idtask;
  }
}
