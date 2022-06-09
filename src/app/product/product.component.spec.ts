import { ProductComponent } from './product.component';
import { TestBed } from '@angular/core/testing';

describe('ProductComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    });
  });

  it('should have product name', () => {
    const comp = new ProductComponent();
    comp.setProductName();

    expect(comp.name).toBe('Carrot');
  })
})
