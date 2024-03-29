import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCharactersComponent } from './anime-characters.component';

describe('AnimeCharactersComponent', () => {
  let component: AnimeCharactersComponent;
  let fixture: ComponentFixture<AnimeCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeCharactersComponent]
    });
    fixture = TestBed.createComponent(AnimeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
