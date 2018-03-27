import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiasComponent } from './energias.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EnergiasComponent', () => {
  let component: EnergiasComponent;
  let fixture: ComponentFixture<EnergiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ EnergiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
