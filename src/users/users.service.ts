import { Injectable } from '@nestjs/common';
import { User } from './users.interface'; 
import { Note } from 'src/notes/note.interface';

@Injectable()
export class UsersService {
    users: User[] = [
        {
            userId: '1', 
            first_name: 'John',
            last_name: 'Doe', 
            email: 'john@doe.com',
            password: 'doepass',
            fav_notes: ['someId', 'someOtherId']
        },
        {
            userId: '2', 
            first_name: 'John',
            last_name: 'Smith', 
            email: 'john@smith.com',
            password: 'smithpass',
            fav_notes: []
        },
        {
            userId: '3', 
            first_name: 'Eve',
            last_name: 'Polastri', 
            email: 'eve@polastri.com',
            password: 'villanelle',
            fav_notes: []
        }
    ];    
    notes: Note[] = []; // should be calling to database in order to get the actual notes and filter them;

    register(newUser: User): User {
        this.users.push(newUser); 
        return newUser;
    }

    login(_email: string, _password: string): string {
        const reqUser: User = this.users.find( user => user.email === _email);
        if ( reqUser && reqUser.password === _password) {
            return 'Login successful'; 
        } else if ( reqUser && reqUser.password !== _password ) {
            return 'The password does not match, please try again';
        } else {
            return 'We cannot find this email on our database. Do you want to sign in?'
        }        
    }

    fav(_userId: string, _note: Note ): User {
        const reqUser: User = this.users.find( user => user.userId === _userId); 
        if (reqUser && !reqUser.fav_notes.includes(_note.noteId)){
            reqUser.fav_notes.push(_note.noteId);
            return reqUser; 
        } else if (reqUser && reqUser.fav_notes.includes(_note.noteId)) {
            reqUser.fav_notes = reqUser.fav_notes.filter( fav => fav !== _note.noteId );
            return reqUser; 
        }
    }

    getFavs(_userId: string): Note[] {
        const reqUser: User = this.users.find( user => user.userId === _userId); 
        const userFavs = reqUser ? reqUser.fav_notes : undefined; 

        return userFavs ? this.notes.filter( note => userFavs.includes(note.noteId)) : undefined; 
    }
}
