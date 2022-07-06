import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductForm, ProductModel } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll(): Promise<any[]> {
    return this.productService.getAll();
  }

  @Post()
  create(@Body() product: ProductForm): Promise<ProductModel> {
    return this.productService.save(product as ProductModel);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    await this.productService.delete(id);
    return Promise.resolve('OK');
  }

  @Patch()
  update(): Promise<string> {
    return Promise.resolve('OK');
  }
}
