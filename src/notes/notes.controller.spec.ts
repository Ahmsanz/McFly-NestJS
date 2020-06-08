import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { Note } from './note.interface';

describe('Notes Controller', () => {
  let notesController: NotesController;
  let notesService: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotesController],
      providers: [NotesService]
    }).compile();

    notesController = module.get<NotesController>(NotesController);
    notesService = module.get<NotesService>(NotesService);
  });

  describe('getAll', () => {
    it('should return an array with all the existing notes', async () => {
      const result: Note[] = [];
      jest.spyOn(notesService, 'getAll').mockImplementation(() => result);

      expect(await notesController.getAll()).toBe(result); 
    })
  })
});
