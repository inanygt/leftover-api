import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingItemsService } from './shopping-items.service';

describe('ShoppingItemsService', () => {
  let service: ShoppingItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingItemsService],
    }).compile();

    service = module.get<ShoppingItemsService>(ShoppingItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
