export interface Product {
  name: string;
  price: number;
  platform: string;
}

export interface ProductModel extends Product {
  id: number;
}

export class ProductForm implements Product {
  //@ApiProperty()
  readonly name: string;

  //@ApiProperty()
  readonly price: number;

  //@ApiProperty()
  readonly platform: 'Xbox' | 'PS4' | 'Nintendo';
}
