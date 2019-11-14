import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFilterPage } from './data-filter.page';

describe('DataFilterPage', () => {
  let component: DataFilterPage;
  let fixture: ComponentFixture<DataFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
