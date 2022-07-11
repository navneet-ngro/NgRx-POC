import { reducer } from './product.reducer';
import { initialState } from "../product.state";
import * as fromProductActions from "../actions/product.actions";
import { IProduct, PRODUCT } from '../../product.interface';

describe('Store > Data > DataReducer', () => {
  afterEach(() => {
    initialState.products.length = 0;
  });

  it('SHOULD return the default state', () => {
    const state = reducer(undefined, { type: null });
    expect(state).toBe(initialState);
  });

  it('SHOULD load data', () => {
    const payload: IProduct[] = [
      PRODUCT
    ];
    const action = new fromProductActions.LoadSuccess(payload);
    const state = reducer(initialState, action);

    expect(state.products).toEqual(payload);
  });
});
