import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() name: string;
  @Input() price: number;
  @Input() description: string;

  constructor() {
  }
}
