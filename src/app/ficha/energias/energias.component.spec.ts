import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiasComponent } from './energias.component';

describe('EnergiasComponent', () => {
  let component: EnergiasComponent;
  let fixture: ComponentFixture<EnergiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
