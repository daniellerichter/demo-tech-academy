import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: Product[];
  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartProducts = this.shoppingCartService.getCartItems();
  }

}
