import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowNg2LibComponent } from './shadow-ng2-lib.component';

describe('ShadowNg2LibComponent', () => {
  let component: ShadowNg2LibComponent;
  let fixture: ComponentFixture<ShadowNg2LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowNg2LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowNg2LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
