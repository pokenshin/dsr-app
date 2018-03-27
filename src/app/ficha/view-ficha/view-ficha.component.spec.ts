import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFichaComponent } from './view-ficha.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewFichaComponent', () => {
  let component: ViewFichaComponent;
  let fixture: ComponentFixture<ViewFichaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ ViewFichaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
