import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/products/product.interface';

@Injectable()
export class SalesService {

  constructor(
    private http: HttpClient
  ) { }

  public getSalesData(): Observable<IProduct[]> {
    const salesDataUrl = `api/products`;
    return this.http.get<IProduct[]>(salesDataUrl);
  }
}
