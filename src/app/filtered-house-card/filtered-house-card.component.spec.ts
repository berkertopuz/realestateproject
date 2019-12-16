import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredHouseCardComponent } from './filtered-house-card.component';

describe('FilteredHouseCardComponent', () => {
  let component: FilteredHouseCardComponent;
  let fixture: ComponentFixture<FilteredHouseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredHouseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredHouseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
