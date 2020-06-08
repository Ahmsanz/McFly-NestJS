export interface Note {
    noteId?: string;
    userId: string;
    content: string;
    favBy?: string[];    
}