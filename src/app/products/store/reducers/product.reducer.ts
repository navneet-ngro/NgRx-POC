import { ProductActions, ProductActionTypes } from "../actions/product.actions";
import { initialState, ProductState } from "../product.state";


export function reducer(state = initialState, action : ProductActions) : ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: !state.showProductCode
      };
    case ProductActionTypes.LoadSuccess:
      return {
        ...state,
        products: action.payload
      }

    default:
      return state;
  }
}
