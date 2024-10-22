import { Module } from '@nestjs/common';
import { ShoppingItemsController } from './shopping-items.controller';
import { ShoppingItemsService } from './shopping-items.service';

@Module({
  controllers: [ShoppingItemsController],
  providers: [ShoppingItemsService]
})
export class ShoppingItemsModule {}
