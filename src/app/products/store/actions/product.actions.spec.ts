import { IProduct, PRODUCT } from '../../product.interface';
import * as Actions from './product.actions';

describe('Store > Product > ProductActions', () => {
  it('SHOULD create a LoadData action', () => {
    const action = new Actions.Load();
    expect(action.type).toEqual(Actions.ProductActionTypes.Load);
  });

  it('SHOULD create a LoadSuccess action containing a payload', () => {
    const payload: IProduct[] = [
      PRODUCT
    ];
    const action = new Actions.LoadSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.ProductActionTypes.LoadSuccess,
      payload
    });
  });
});
