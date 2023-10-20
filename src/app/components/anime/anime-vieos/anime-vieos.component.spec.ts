import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeVieosComponent } from './anime-vieos.component';

describe('AnimeVieosComponent', () => {
  let component: AnimeVieosComponent;
  let fixture: ComponentFixture<AnimeVieosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeVieosComponent]
    });
    fixture = TestBed.createComponent(AnimeVieosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
