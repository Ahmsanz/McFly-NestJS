import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Note } from '../notes/note.interface'
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create_note_dto';

@Controller('notes')
export class NotesController {
    constructor (private readonly notesService: NotesService) { }

    
    @Get()
    getAll(): Note[]{
        return this.notesService.getAll();
    }

    @Post()
    create(@Body() createNoteDto: CreateNoteDto): void{
        return this.notesService.create(createNoteDto)
    }

    @Get(':id')
    getSingleNote(@Param('id') id: string): Note{
        return this.notesService.getSingleNote(id);
    }

}
