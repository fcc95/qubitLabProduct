import {Product} from '../product/product.types';

export interface Cart {
  product: Product;
  quantity: number;
}
