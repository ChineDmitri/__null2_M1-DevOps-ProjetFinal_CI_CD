import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDto } from '../dto/req/create-user.req.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserRequestDto) {
    console.log('FIX YEAH!');
    console.log('FIX encore YEAH!');
    return this.usersService.createUser(createUserDto);
  }
}
