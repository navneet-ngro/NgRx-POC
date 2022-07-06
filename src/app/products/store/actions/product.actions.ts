import { Action } from "@ngrx/store";
import { IProduct } from "../../../products/product.interface";

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code', // don't use back tick quote here, will throw error
  Load = '[Product] Load',
  LoadSuccess = '[Product] Success',
  LoadFail = '[Product] Fail'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;
  constructor (public payload: boolean) {}
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(public payload: IProduct[]) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;
  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode | Load | LoadSuccess;
