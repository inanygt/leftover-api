import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ShoppingItemsService } from './shopping-items.service';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';

@Controller('shopping-items')
export class ShoppingItemsController {

  constructor(private readonly shoppingItemsService: ShoppingItemsService) {}

  @Get()
  getAll() {
    return this.shoppingItemsService.findAll();
  }

  @Get(':userId')
  getItems(@Param('userId', ParseIntPipe) userId: number) {
    const items = this.shoppingItemsService.getItemsForUser(userId);
    return items;
  }

  @Post(':userId')
  create(
    @Param('userid', ParseIntPipe) userId: number,
    @Body() createShoppingItemDto: CreateShoppingItemDto) {
      createShoppingItemDto.userId = userId;
      return this.shoppingItemsService.createItemForUser(createShoppingItemDto);
  }

  @Patch(':userId/:id')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShoppingItemDto: UpdateShoppingItemDto) {
      const updatedItem = this.shoppingItemsService.updateItemForUser(userId, id, updateShoppingItemDto);
      return updatedItem;
    }

  @Delete(':userId/:itemId' )
  deleteItem(
    @Param('userId', ParseIntPipe) userId: number, 
    @Param('itemId') itemId: number
  ) {
    const result = this.shoppingItemsService.deleteItemForUser(userId, itemId)
    return result;
  }
}
