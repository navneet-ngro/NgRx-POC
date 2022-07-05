import { Component, OnInit } from '@angular/core';
import { columnConfig } from '../../config/column-config';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  public sales: any[] = [];
  public columns: any[] = [];
  constructor(private gridService: GridService) {}

  ngOnInit(): void {
    this.gridService.getSalesData().subscribe((response) => {
      console.log(response);

      this.sales = response.sales;
    });

    this.columns = columnConfig;
  }
}
