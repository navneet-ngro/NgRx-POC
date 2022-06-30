import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Product } from '../product';
import { ProductService } from '../product.service';
import * as fromProductActions from "./product.actions";

@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private actions$: Actions) { }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(fromProductActions.ProductActionTypes.Load),
    mergeMap((action: fromProductActions.Load) => {
      return this.productService.getProducts()
        .pipe(map((products: Product[]) => {
          return new fromProductActions.LoadSuccess(products);
        }));
    })
  );

}
