import { Injectable } from '@nestjs/common';
import { CreateShoppingItemDto } from './dto/create-shopping-item.dto';
import { UpdateShoppingItemDto } from './dto/update-shopping-item.dto';

@Injectable()
export class ShoppingItemsService {
  private shoppingItems = [
    { id: 1, userId: 123, productId: 456, text: 'test', quantity: 1 },
    { id: 2, userId: 123, productId: 789, text: 'test', quantity: 1 },
    { id: 3, userId: 456, productId: 123, text: 'test', quantity: 1 },
  ];

  findAll() {
    return this.shoppingItems;
  }

  getItemsForUser(userId: number) {
    return this.shoppingItems.filter(item => item.userId === userId);
  }

  updateItemForUser(userId: number, id: number, updateShoppingItemDto: UpdateShoppingItemDto) {
    const userItems = this.shoppingItems.filter(item => item.userId === userId)
    const item = userItems.find(item => item.id === id)
    const updatedItem = {...item, ...updateShoppingItemDto}

    return updatedItem;
  }

  deleteItemForUser(userId: number, productId: number) {
    const items = this.shoppingItems.filter(item => item.userId === userId);
    const removedItem = items.filter(item => item.id !== +productId);

    return removedItem;
  }

  createItemForUser(item: CreateShoppingItemDto) {
    const newItem = {
      id: parseInt(item.id),
      userId: item.userId,
      productId: item.productId,
      text: item.text,
      quantity: item.quantity
    }
    this.shoppingItems.push(newItem);
    return item;
  }
}
