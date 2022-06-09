import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResult } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<ProductResult>('https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list')
      .pipe(
        map(result => result.products)
      )
  }

  getProductDetails(id: string) {
    const url = `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`;
    return this.httpClient.get<Product>(url);
  }
}
