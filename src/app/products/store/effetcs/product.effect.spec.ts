import { Observable, of } from 'rxjs';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductEffects } from "./product.effects";
import * as fromProductActions from "../actions/product.actions";
import { ProductService } from "../../product.service";
import { IProduct, PRODUCT } from '../../product.interface';

describe('Store > Productffect', () => {
  let actions$: Observable<fromProductActions.Load>;
  let effects: ProductEffects;
  let dataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: ProductService,
          useValue: jasmine.createSpyObj('ProductService', ['getProducts'])
        }
      ],
    });

    effects = TestBed.inject<ProductEffects>(ProductEffects);
    dataService = TestBed.inject<ProductService>(ProductService);
  }));

  it('SHOULD dispatch LoadSuccess action WHEN Load action is dispatched', () => {
    const data: IProduct[] = [
      PRODUCT
    ];

    dataService.getProducts.and.returnValue(of(data));

    actions$ = of({ type: fromProductActions.ProductActionTypes.Load });

    effects.loadProducts$.subscribe(action => {
      expect(action.type).toBe(fromProductActions.ProductActionTypes.LoadSuccess);
      expect(action.payload).toEqual(data);
    });
  });
});
