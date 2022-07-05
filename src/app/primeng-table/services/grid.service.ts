import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { response } from '../sales';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(
    private http: HttpClient
  ) { }

  public getSalesData(): Observable<any> {
    return of(response);
    const salesDataUrl = `api/sales`;
    return this.http.get<any>(salesDataUrl);
  }
}
