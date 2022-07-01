import { Product } from "../product";
import * as fromRoot from "../../state/app.state";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

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
