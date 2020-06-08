import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Note } from 'src/notes/note.interface';

describe('Users Controller', () => {
  let controller: UsersController;
  let service: UsersService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [UsersController],
  //   }).compile();

  //   controller = module.get<UsersController>(UsersController);
  // });

  beforeEach( () => {
    controller = new UsersController(service);
    service = new UsersService(); 
  });

  describe('getFavs', () => {
    it ('should return an array with the user favourite notes IDs', () => {
      const result: Note[] = [{noteId: 'someID', userId: 'userId', content: 'Lorem ipsum'}];
      jest.spyOn(service, 'getFavs').mockImplementation(() => result);

      expect(controller.getFavs('1')).toBe(result); 
    })
  })
});
