import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsxTableComponent } from './csx-table.component';

describe('CsxTableComponent', () => {
  let component: CsxTableComponent;
  let fixture: ComponentFixture<CsxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsxTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
