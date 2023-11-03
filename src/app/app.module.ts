import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { SearchanimeComponent } from './components/anime/searchanime/searchanime.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimeNewsComponent } from './components/anime/anime-news/anime-news.component';
import { WatchlistComponent } from './components/anime/watchlist/watchlist.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SectionComponent,
    MainPageComponent,
    MangaComponent,
    GenresComponent,
    UpcommingComponent,
    AnimeInDetailComponent,
    AnimeCharactersComponent,
    AnimeVieosComponent,
    MangadetailComponent,
    CharacterComponent,
    SearchanimeComponent,
    AnimeNewsComponent,
    WatchlistComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);