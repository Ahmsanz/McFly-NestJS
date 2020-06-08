import { Injectable } from '@nestjs/common';
import { User } from './users.interface'; 
import { Note } from 'src/notes/note.interface';

@Injectable()
export class UsersService {
    users: User[] = [];
    notes: Note[] = [];

    register(newUser: User): void {
        this.users.push(newUser); 
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

    fav(_userId: string, _note: Note): void {
        const reqUser: User = this.users.find( user => user.userId === _userId); 
        if (reqUser && !reqUser.fav_notes.includes(_note.noteId)){
            reqUser.fav_notes.push(_note.noteId);
        } else if (reqUser && reqUser.fav_notes.includes(_note.noteId)) {
            reqUser.fav_notes.filter( fav => fav !== _note.noteId )
        }
    }

    getFavs(_userId: string): Note[] {
        const reqUser: User = this.users.find( user => user.userId === _userId); 
        const userFavs = reqUser ? reqUser.fav_notes : undefined; 

        return userFavs ? this.notes.filter( note => userFavs.includes(note.noteId)) : undefined; 
    }
}
