export class CreateNoteDto {
    noteId?: string;
    userId: string;
    content: string;
    favBy?: string[];    
}