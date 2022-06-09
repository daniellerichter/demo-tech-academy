import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { mergeMap } from 'rxjs';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        mergeMap(params => {
          const id = params.get('id') as string;
          return this.productService.getProductDetails(id);
        })
      )
      .subscribe(product => {
       this.product = product;
    })
  }

  addToCart(product: Product) {
    this.shoppingCartService.addToCart(product);
  }
}
