import { Controller, Post, Get, Put, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create_user_dto';
import { User } from './users.interface';
import { Note } from '../notes/note.interface'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    register(@Body() createUserDto: CreateUserDto): User{
        return this.usersService.register(createUserDto);
    }

    @Post('/login')
    login(@Body() createUserDto: CreateUserDto): string {
        return this.usersService.login(createUserDto.email, createUserDto.password); 
    }

    @Put(':userId/fav')
    fav(@Param('userId')  userId: string, @Body() note: Note): User {
        return this.usersService.fav(userId, note);
    }

    @Get(':userId/favs')
    getFavs(@Param('userId') userId: string): Note[] | string {
        return this.usersService.getFavs(userId);
    }

}
