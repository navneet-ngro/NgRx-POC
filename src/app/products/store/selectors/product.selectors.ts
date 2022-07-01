import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../product.state";

const getProductFeatureState = createFeatureSelector<ProductState>(`products`);
export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode);
export const getProducts = createSelector(getProductFeatureState, state => state.products);
