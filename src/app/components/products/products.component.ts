import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../service/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    public products: Product[] | undefined = undefined;
    public shoppingCart: Product[] = [];
    public total = 0;
    public showProductDetail = false;
    public productChosen?: Product;
    public offset = 0;
    private limit = 30;
    public showLoadMore = false;

    constructor(private readonly productsService: ProductsService) {
    }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts() {
        this.productsService.getProducts(this.offset, this.limit).subscribe({
            next: (p: Product[]) => {
                this.products = this.products ? this.products.concat(p) : p;
                this.offset += this.limit;
                this.showLoadMore = p.length === this.limit;
            }
        });
    }
    addToShoppingCart(aProduct: Product) {
        this.shoppingCart.push(aProduct);
        this.total += aProduct.price;
    }

    toggleProductDetail() {
        this.showProductDetail = !this.showProductDetail;
    }

    onShowDetail(aId: Product['id']) {
        this.productsService.getProduct(aId)
            .subscribe({
                next: (response) => {
                    this.toggleProductDetail();
                    this.productChosen = response
                }
            })
    }
}
