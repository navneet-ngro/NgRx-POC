import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsxNativeTableComponent } from './csx-native-table.component';

describe('CsxNativeTableComponent', () => {
  let component: CsxNativeTableComponent;
  let fixture: ComponentFixture<CsxNativeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsxNativeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsxNativeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
