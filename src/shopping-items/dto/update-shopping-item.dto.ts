import { CreateShoppingItemDto } from "./create-shopping-item.dto";
import {PartialType} from '@nestjs/mapped-types'

export class UpdateShoppingItemDto extends PartialType(CreateShoppingItemDto) {}