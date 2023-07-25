import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
// import { CreateTodoDto } from './create-todo.dto';


@Injectable()
export class TodoService {
  constructor() {}

  async create(createTodoDto: CreateTodoDto) {
    
    // const createdTodo = new this.todoModel(createTodoDto);
    // console.log("createdTodo", createTodoDto);
    
  

  }


  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  // update(id: number, updateTodoDto: UpdateTodoDto) {
  //   return `This action updates a #${id} todo`;
  // }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
