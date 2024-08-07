import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadbarComponent } from './loadbar.component';

describe('LoadbarComponent', () => {
  let component: LoadbarComponent;
  let fixture: ComponentFixture<LoadbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadbarComponent]
    });
    fixture = TestBed.createComponent(LoadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
