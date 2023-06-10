import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecHomeComponent } from './direc-home.component';

describe('DirecHomeComponent', () => {
  let component: DirecHomeComponent;
  let fixture: ComponentFixture<DirecHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirecHomeComponent]
    });
    fixture = TestBed.createComponent(DirecHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
