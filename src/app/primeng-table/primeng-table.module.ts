import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from "primeng/table";

import { GridComponent } from "./components/grid/grid.component";
import { GridService } from "./services/grid.service";

const routes: Routes = [
  {path: ``, component: GridComponent}
];

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: [GridComponent],
  providers: [GridService],
})
export class PrimengTableModule { }
