import { Injectable } from '@nestjs/common';
import { task } from './interface/task.interface';
@Injectable()
export class TaskService {
    tareas:task[] = [
        {nombre:"hola"}
    ]
}
