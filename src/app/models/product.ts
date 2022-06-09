export interface Product {
  product_id: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductResult {
  products: Product[]
}
