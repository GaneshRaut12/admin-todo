import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
// import { Constants } from 'src/utils/constants';
import {Constants } from "../utilis/constants"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


  // this is for posting user data inside the databse
 createUser(createUserDto:CreateUserDto){
  const user  = new User(); 
  user.email = createUserDto.email;
  user.firstName = createUserDto.firstName;
  user.lastName = createUserDto.lastName;
  user.password = createUserDto.password;
  user.role =  Constants.ROLES.NORMAL_ROLE;
  return this.usersRepository.save(user)
 }
  


  findAll() {
    return this.usersRepository.find();
  }

  getUserbyId(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }



  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  removeUser(id: number) {
    return this.usersRepository.delete({id:id});
  }
}
