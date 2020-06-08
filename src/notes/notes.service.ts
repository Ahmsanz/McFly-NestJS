import { Injectable } from '@nestjs/common';
import { Note } from './note.interface'
import { CreateNoteDto } from './dto/create_note_dto';

@Injectable()
export class NotesService {
    private readonly notes: Note[] = [
        {
            noteId: '1',
            userId: '12',
            content: 'Lorem impsum'            
        },
        {
            noteId: '2',
            userId: '22',
            content: 'Lorem impsum'            
        },
        {
            noteId: '3',
            userId: '32',
            content: 'Lorem impsum'            
        }
    ];

    getAll(): Note[] {
        return this.notes;
    }

    getSingleNote(id: string): Note {
        return this.notes.find( note => note.noteId === id);
    }

    create(newNote: Note): void{        
        this.notes.push(newNote);
    }
}
