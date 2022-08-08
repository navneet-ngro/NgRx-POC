import { Component, Input, OnInit } from '@angular/core';

interface IColumnConfig {
  field: string;
}

@Component({
  selector: 'csx-table',
  templateUrl: './csx-table.component.html',
  styleUrls: ['./csx-table.component.scss']
})
export class CsxTableComponent implements OnInit {
  @Input() public rows = [];
  @Input() public columns: IColumnConfig[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);

  }

}
