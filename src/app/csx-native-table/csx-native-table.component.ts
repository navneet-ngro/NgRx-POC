import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface IColumnConfig {
  field: string;
}

@Component({
  selector: 'csx-native-table',
  templateUrl: './csx-native-table.component.html',
  styleUrls: ['./csx-native-table.component.scss']
})
export class CsxNativeTableComponent implements OnInit, OnChanges {
  private allRows = [];
  @Input() public rows = [];
  @Input() public columns: IColumnConfig[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rows.currentValue) {
      this.allRows = JSON.parse(JSON.stringify(changes.rows.currentValue));
    }
  }

  public onFilterChange(event, field) {
    this.rows = this.allRows.filter(row => {
      return String(row[field]).toLowerCase().includes(event.target.value.toLowerCase());
    });
  }

}
