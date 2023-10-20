import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeInDetailComponent } from './anime-in-detail.component';

describe('AnimeInDetailComponent', () => {
  let component: AnimeInDetailComponent;
  let fixture: ComponentFixture<AnimeInDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeInDetailComponent]
    });
    fixture = TestBed.createComponent(AnimeInDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
