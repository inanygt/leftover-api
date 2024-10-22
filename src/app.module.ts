import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingItemsModule } from './shopping-items/shopping-items.module';

@Module({
  imports: [ShoppingItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
