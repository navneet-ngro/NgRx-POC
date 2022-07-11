import { reducer } from '../reducers/product.reducer';
import { initialState } from "../product.state";
import * as fromActions from '../actions/product.actions';
import { IProduct, PRODUCT } from '../../product.interface';

describe('Store > ProcuctReducer', () => {
  afterEach(() => {
    initialState.products = [];
  });


  it('SHOULD load data', () => {
    const payload: IProduct[] = [PRODUCT];

    const action = new fromActions.LoadSuccess(payload);
    const state = reducer(initialState, action);

    expect(state.products).toEqual(payload);
  });
});
