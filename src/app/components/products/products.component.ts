import { Component } from '@angular/core';
import productsMock from './../../products.json';
import { Product } from '../../models/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: Product[] = productsMock;
}
