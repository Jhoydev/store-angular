import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endPoint = 'https://young-sands-07814.herokuapp.com/api';

  constructor(private readonly http: HttpClient) { }

  public all(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.endPoint}/products`);
  }
}
