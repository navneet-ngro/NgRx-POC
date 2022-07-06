
import * as fromRoot from "../../store/app.state";
import { IProduct } from "../product.interface";

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: IProduct;
  products: IProduct[];
}

export const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};
