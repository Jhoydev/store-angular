import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../service/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  public products: Product[] | undefined = undefined;
  public shoppingCart: Product[] = [];
  public total = 0;

  constructor(private readonly productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.all().subscribe({
      next: (p: Product[]) => this.products = p
    });
  }

  addToShoppingCart(aProduct: Product) {
    this.shoppingCart.push(aProduct);
    this.total += aProduct.price;
  }
}
