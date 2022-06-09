import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cart: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }
}
