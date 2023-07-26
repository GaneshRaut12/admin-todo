import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post(':userId')
  createTodo(
    @Body() createTodoDto: CreateTodoDto,
    @Param('userId') userId: number,
  ) {
    console.log('id', userId);
    return this.todoService.create(createTodoDto, userId);
  }

  @Get('/todoByUserIdCompleted/:userID')
  findTodoByUserIdComplete(@Param('userID') userID: number) {
    return this.todoService.findTodoByUserIdComplete(userID);
  }

  @Get('/todoByUserIdNotCompleted/:userID')
  findTodoByUserIdNotComplete(@Param('userID') userID: number) {
    console.log(typeof userID , userID);
    return this.todoService.findTodByUserIdNotCompleted(Number(userID));
  }

  @Patch(':todoID')
  updateTodo(@Param('todoID') todoID: number) {
    return this.todoService.makeTodoComplete(todoID);
  }

  @Delete(":todoID")
  deleteTodoById(@Param("todoID") todoID : number){
    return this.todoService.deleteTodoById(todoID)

  }
}
