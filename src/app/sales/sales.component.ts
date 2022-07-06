import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IProduct } from '../products/product.interface';
import { columnConfig1, columnConfig2 } from './config/column-config'
import { IColumnConfig } from './sales.interface';
import { SalesService } from './services/sales.service';

@Component({
  selector: 'app-grid',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  private quarter1: IProduct[];
  private quarter2: IProduct[];
  public columns: IColumnConfig[] = [];
  public values: IProduct[];
  public activeItem: MenuItem;

  public meniItems: MenuItem[] = [
    {label: 'Q1 Sales', command: this.menuClickHandler.bind(this)},
    {label: 'Q2 Sales', command: this.menuClickHandler.bind(this)}
  ];


  constructor(private salesService: SalesService) {}

  ngOnInit(): void {
    this.salesService.getSalesData().subscribe((sales) => {
      this.quarter1 = sales.slice(0,2);
      this.quarter2 = sales.slice(2,5);

      this.activeItem = this.meniItems[0];
      this.values = this.quarter1;
    });

    this.columns= columnConfig1;
  }

  private menuClickHandler({item}) {
    switch (item.label) {
      case `Q1 Sales`:
        this.values = this.quarter1;
        this.columns = columnConfig1;
        break;
      case `Q2 Sales`:
        this.values = this.quarter2;
        this.columns = columnConfig2;
      default:
        break;
    }
  }
}
