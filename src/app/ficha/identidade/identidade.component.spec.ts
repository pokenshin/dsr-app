import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadeComponent } from './identidade.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('IdentidadeComponent', () => {
  let component: IdentidadeComponent;
  let fixture: ComponentFixture<IdentidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ IdentidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
