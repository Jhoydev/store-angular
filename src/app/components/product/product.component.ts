import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product | undefined = undefined;
  @Output() addedProduct: EventEmitter<Product> = new EventEmitter<Product>();

  addProduct(product: Product): void {
    this.addedProduct.emit(product)
  }
}
