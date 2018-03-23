import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDebugComponent } from './view-debug.component';

describe('ViewDebugComponent', () => {
  let component: ViewDebugComponent;
  let fixture: ComponentFixture<ViewDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
