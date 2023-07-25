import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
// user post its data
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
//get the all user
  @Get('all')
  findAll(@Req() req) {   
    return this.userService.findAll();
  }
// get user by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.getUserbyId(+id);
  }

  
// this deleting the user
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(+id);
  }
}
