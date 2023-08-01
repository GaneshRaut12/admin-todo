import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { UserService } from 'src/user/user.service';
// import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodoService {
  
  constructor(
    @InjectRepository(Todo)
    private addTodoRepository: Repository<Todo>,
    private userService: UserService,
  ) {}

  async create(createTodoDto: CreateTodoDto, userId: number) {
    console.log(typeof userId);
    // this will add todo with respect to the user
    const todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.date = new Date().toLocaleDateString();
    todo.isCompleted = false;
    todo.user = await this.userService.getUserbyId(userId);
    this.addTodoRepository.save(todo);
    return todo;
  }

  findTodoByUserIdComplete(userId: number) {
    return this.addTodoRepository.find({
      relations: ['user'],
      where: { user: { id: userId }, isCompleted: true },
    });
  }

  findTodByUserIdNotCompleted(userId: number) {
    console.log(typeof userId , userId);
    return this.addTodoRepository.find({
      relations: ['user'],
      where: { user: { id : userId }, isCompleted: false },
    });
  }

  makeTodoComplete(todoID: number) {
    return this.addTodoRepository.update(todoID, {
      isCompleted: true,
    });
  }

  deleteTodoById(todoID: number) {
    return this.addTodoRepository.delete(todoID)
  }
}
