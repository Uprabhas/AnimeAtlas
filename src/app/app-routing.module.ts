import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './components/anime/section/section.component';
import { MainPageComponent } from './components/anime/main-page/main-page.component';
import { MangaComponent } from './components/manga/manga/manga.component';
import { GenresComponent } from './components/genres/genres.component';
import { UpcommingComponent } from './components/manga/upcomming/upcomming.component';
import { AnimeInDetailComponent } from './components/anime/anime-in-detail/anime-in-detail.component';
import { AnimeCharactersComponent } from './components/anime/anime-characters/anime-characters.component';
import { AnimeVieosComponent } from './components/anime/anime-vieos/anime-vieos.component';
import { MangadetailComponent } from './components/manga/mangadetail/mangadetail.component';
import { CharacterComponent } from './components/manga/character/character.component';

const routes: Routes = [
  {path:'',component:SectionComponent},
  {path:'main-page',component:MainPageComponent},
  { path:'manga',component:MangaComponent },
  { path:'genres',component:GenresComponent },
  { path:'upcomming',component:UpcommingComponent },
  { path:'anime-in-detail/:mal_id',component:AnimeInDetailComponent },
  { path:'anime-characters/:mal_id',component:AnimeCharactersComponent },
  { path:'anime-videos/:mal_id',component:AnimeVieosComponent },
  {path:'manga-in-detail/:mal_id',component:MangadetailComponent},
  {path:'manga-characters/:mal_id',component:CharacterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
