import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../products.service';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let productServiceSpy = jasmine.createSpyObj('ProductService', ['getProducts']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        ProductListComponent,
        {
          provide: ProductsService,
          useValue: productServiceSpy
        }
      ]
    });

    component = TestBed.inject(ProductListComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
