import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from 'lodash';
import { data } from '../components/models/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //  api:any=environment

  watchlistanime: any = [];
  wishlistanime: any;

  public animelist: any = new BehaviorSubject<any>([])


  constructor(private http: HttpClient) { }

  // Anime
  searchable(name: any,page:any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime?q=${name}&limit=24&page=${page}`)
  }
  topAnime(page:any): Observable<data[]> {
    return this.http.get(environment.Api_Endpoint + `top/anime?page=${page}&limit=24`,
    )as Observable<data[]>;
  }
  detailanime(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime/${id}/full`);
  }
  animerecommdation(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime/${id}/recommendations`)
  }
  animecharacters(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime/${id}/characters`)
  }
  animenews(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime/${id}/news`);
  }
  animevideos(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `anime/${id}/videos`);
  }


  Addwatchlistanime(data: any) {
    this.watchlistanime.push(data);
    this.wishlistanime = _.uniqBy(this.watchlistanime, 'mal_id');
    // this.wishlistanime = unique
    // console.log(this.wishlistanime)
    this.animelist.next(this.wishlistanime)
    // console.log(this.watchlistanime)
  }
  
  removewatchlistanime(data: any) {
    this.wishlistanime.map((a: any, index: any) => {
      if (data.mal_id === a.mal_id) {
        this.wishlistanime.splice(index, 1)
      }
    })
    this.watchlistanime.map((a: any, index: any) => {
      if (data.mal_id === a.mal_id) {
        this.watchlistanime.splice(index, 1)
      }
    })
  }

  listanime() {
    return this.animelist.asObservable();
  }

  removeallitem() {
    this.wishlistanime = [];
    this.watchlistanime=[];
    this.animelist.next(this.wishlistanime);
  }


  // manga
  upcomming(): Observable<any> {
    return this.http.get(environment.Api_Endpoint + 'seasons/upcoming');
  }
  manga(page:any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `top/manga?page=${page}&limit=24`);
  }

  mangadetail(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `manga/${id}/full`);
  }

  mangacharacter(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `manga/${id}/characters`)
  }

  mangarecommdation(id: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `manga/${id}/recommendations`)
  }

  searchmanga(name: any): Observable<any> {
    return this.http.get(environment.Api_Endpoint + `manga?q=${name}&limit=24`)
  }



}


