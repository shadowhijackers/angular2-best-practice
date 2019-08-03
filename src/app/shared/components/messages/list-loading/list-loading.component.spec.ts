import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoadingComponent } from './list-loading.component';

describe('ListLoadingComponent', () => {
  let component: ListLoadingComponent;
  let fixture: ComponentFixture<ListLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
