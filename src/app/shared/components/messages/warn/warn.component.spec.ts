import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { WarnComponent } from './warn.component';

describe('WarnComponent', () => {
  let component: WarnComponent;
  let fixture: ComponentFixture<WarnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
