import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code', // don't use back tick quote here, will throw error
  SetCurrentProduct = '[Product] Set Current Product'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor (public payload: boolean) {
  }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor (public payload: Product) {}
}

export type ProductActions = ToggleProductCode | SetCurrentProduct;
