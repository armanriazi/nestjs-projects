import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common'; //Req, Res
import { CreateItemDto } from './dto/create-item-dto';
import { UpdateItemDto } from './dto/update-Item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  /*
import { Request, Response } from 'express';
findAll(@Req() req: Request, @Res() res: Response): Response {
    return 'Get All Items';
  }

*/
  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }
  /*  findOne(@Param() param): string {
    return `Item ${param.id}`;
  }
*/
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto); //`Name: ${createItemDto} Desc: ${createItemDto.description}`
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id); // `Delete ${id}`;
  }
  @Put(':id')
  update(@Body() updateItemDto: UpdateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(updateItemDto, id); // `Update ${id}, Name: ${updateItemDto.name}`;
  }
}
