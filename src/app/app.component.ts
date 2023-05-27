import { Component } from '@angular/core';
import productsMock from './products.json';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: ProductModel[] = productsMock;
}
