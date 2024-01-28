import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  /*  private readonly items: Item[] = [
    { id: '55', name: 'Item One', qty: 100, descripton: 'This is item one' },
    { id: '66', name: 'Item Two', qty: 100, descripton: 'This is item two' },
  ];

    findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
*/

  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id); // `Delete ${id}`;
  }

  async update(item: Item, id: string): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true }); // `Update ${id}, Name: ${updateItemDto.name}`;
  }
}
