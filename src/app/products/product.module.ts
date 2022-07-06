import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductShellComponent } from './product-shell/product-shell.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effetcs/product.effects';
import { ProductService } from './product.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductAPI } from './product-api';
import { HttpClientModule } from '@angular/common/http';

const productRoutes: Routes = [
  { path: '', component: ProductShellComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(ProductAPI),
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ],
  providers: [ProductService]
})
export class ProductModule { }
