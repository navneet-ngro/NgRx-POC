import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IProduct } from '../products/product.interface';
import { columnConfig1, columnConfig2, columnConfig3, columnConfig4, columnConfig5, columnConfig6 } from './config/column-config'
import { IColumnConfig } from './sales.interface';
import { SalesService } from './services/sales.service';

const labels = [
  `Jan-Feb`,
  `Mar-Apr`,
  `May-June`,
  `July-Aug`,
  `Sept-Oct`,
  `Nov-Dev`
];

@Component({
  selector: 'app-grid',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  public sales: IProduct[];
  public columns: IColumnConfig[] = [];
  public values: IProduct[];
  public activeItem: MenuItem;

  public menuItems: MenuItem[] = [];


  constructor(private salesService: SalesService) {}

  ngOnInit(): void {

    for (const label of labels) {
      this.menuItems.push({label: label, command: this.menuClickHandler.bind(this)});
    }

    this.salesService.getSalesData().subscribe((sales) => {

      this.activeItem = this.menuItems[0];
      this.sales = sales;
      this.values = sales.slice(0,2);
    });

    this.columns= columnConfig1;
  }

  private menuClickHandler({item}) {
      switch (item.label) {
        case labels[0]:
          this.values = this.sales.slice(0,2);
          this.columns = columnConfig1;
          break;
        case labels[1]:
          this.values = this.sales.slice(2,4);
          this.columns = columnConfig2;
          break;
        case labels[2]:
          this.values = this.sales.slice(4,6);
          this.columns = columnConfig3;
          break;
        case labels[3]:
          this.values = this.sales.slice(6,8);
          this.columns = columnConfig4;
          break;
        case labels[4]:
          this.values = this.sales.slice(8,10);
          this.columns = columnConfig5;
          break;
        case labels[5]:
          this.values = this.sales.slice(10,12);
          this.columns = columnConfig6;
          break;

        default:
          break;
      }
  }
}
