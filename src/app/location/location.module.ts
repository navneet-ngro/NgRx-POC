import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location.component';
import { RouterModule, Routes } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from "primeng/inputtext";
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {path: ``, component: LocationComponent}
]

@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TabViewModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LocationModule { }
