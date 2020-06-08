import { Injectable } from '@nestjs/common';
import { User } from './users.interface'; 

@Injectable()
export class UsersService {
    users: User[] = []
}
