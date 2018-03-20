import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubatributosComponent } from './subatributos.component';

describe('SubatributosComponent', () => {
  let component: SubatributosComponent;
  let fixture: ComponentFixture<SubatributosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubatributosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubatributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
