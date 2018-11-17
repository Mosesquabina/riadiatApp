import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumConverterPage } from './num-converter.page';

describe('NumConverterPage', () => {
  let component: NumConverterPage;
  let fixture: ComponentFixture<NumConverterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumConverterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumConverterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
