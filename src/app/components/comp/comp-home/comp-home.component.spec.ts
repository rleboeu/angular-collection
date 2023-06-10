import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompHomeComponent } from './comp-home.component';

describe('CompHomeComponent', () => {
  let component: CompHomeComponent;
  let fixture: ComponentFixture<CompHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompHomeComponent]
    });
    fixture = TestBed.createComponent(CompHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
