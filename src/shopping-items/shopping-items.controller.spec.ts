import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingItemsController } from './shopping-items.controller';

describe('ShoppingItemsController', () => {
  let controller: ShoppingItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingItemsController],
    }).compile();

    controller = module.get<ShoppingItemsController>(ShoppingItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
