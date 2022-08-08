import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TableModule } from "primeng/table";
import { TabMenuModule } from "primeng/tabmenu";
import { CsxTableComponent } from '../csx-table/csx-table.component';
import { ProductAPI } from '../products/product-api';
import { SalesComponent } from './sales.component';
import { SalesService } from './services/sales.service';


const routes: Routes = [
  {path: ``, component: SalesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    TabMenuModule,
    RouterModule.forChild(routes),
    InMemoryWebApiModule.forFeature(ProductAPI)
  ],
  exports: [RouterModule],
  declarations: [SalesComponent, CsxTableComponent],
  providers: [SalesService],
})
export class SalesModule { }
