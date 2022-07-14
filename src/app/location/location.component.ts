import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRegion } from './location.interface';

@Component({
  selector: 'pm-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LocationComponent implements OnInit {
  public regions: IRegion[];
  public zones: IRegion[];
  public subdivision: IRegion[];
  public branch: IRegion[];
  public locationForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regions = [
      { name: 'New York', id: 'NY' },
      { name: 'Rome', id: 'RM' },
      { name: 'London', id: 'LDN' },
      { name: 'Istanbul', id: 'IST' },
      { name: 'Paris', id: 'PRS' }
    ];
    this.zones = this.regions;

    this.locationForm = this.fb.group({
      region: [null],
      zone: [null]
    });
  }

}
