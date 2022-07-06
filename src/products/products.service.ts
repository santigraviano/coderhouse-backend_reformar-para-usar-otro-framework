import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { ProductModel } from 'src/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('products') private model: Model<ProductModel>) {}

  private readonly database: ProductModel[] = [];

  async getAll(): Promise<ProductModel[]> {
    const data = await this.model.find({}).exec();
    return data;
  }

  async save(product: ProductModel): Promise<ProductModel> {
    const databaseData = await this.model.create(product);
    return databaseData;
  }

  delete(id: string) {
    return this.model.deleteOne({ _id: new Types.ObjectId(id) });
  }
}
