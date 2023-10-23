import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchanimeComponent } from './searchanime.component';

describe('SearchanimeComponent', () => {
  let component: SearchanimeComponent;
  let fixture: ComponentFixture<SearchanimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchanimeComponent]
    });
    fixture = TestBed.createComponent(SearchanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
