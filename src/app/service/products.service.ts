import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private endPoint: string = environment.apiUrl;

    constructor(private readonly http: HttpClient) {
    }

    public getProducts(offset: number, limit: number): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.endPoint}/products`, { params: { offset,limit } });
    }

    public getProduct(aId: number): Observable<Product> {
        return this.http.get<Product>(`${this.endPoint}/products/${aId}`);
    }
}
