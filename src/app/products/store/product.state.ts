
import * as fromRoot from "../../store/app.state";
import { Product } from "../product";

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};
