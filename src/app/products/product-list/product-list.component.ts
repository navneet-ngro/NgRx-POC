import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Store, select } from '@ngrx/store';
import { ProductState } from '../store/product.state';
import * as fromProductSelectors from "../store/selectors/product.selectors";
import * as fromProductActions from "../store/actions/product.actions";

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private store: Store<ProductState>,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct
    );

    this.store.dispatch(new fromProductActions.Load());
    this.store.pipe(select(fromProductSelectors.getProducts))
      .subscribe((products: Product[]) => {
        this.products = products;
      });

    // TODO: Unsubscribe
    this.store.pipe(select(fromProductSelectors.getShowProductCode)).subscribe(
      showProductCode => {
          this.displayCode = showProductCode;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new fromProductActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}
