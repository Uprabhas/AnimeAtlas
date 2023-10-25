import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api:any=environment
  public watchlistanime:any=[];
  public animelist:any=new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }

  // Anime
  searchable(name:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime?q=${name}`)
  }
  topAnime(): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+"top/anime");
  }
  detailanime(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/full`);
  }
  animerecommdation(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/recommendations`)
  }
  animecharacters(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/characters`)
  }
  animenews(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/news`);
  }
  animevideos(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/videos`);
  }

  Addwatchlistanime(data: any){
    this.watchlistanime.push(data);
    this.animelist.next(this.watchlistanime)
    console.log(this.watchlistanime)
  }

  removewatchlistanime(data:any){
    this.watchlistanime.map((a:any,index:any)=>{
      if(data.mal_id===a.mal_id){
        this.watchlistanime.splice(index,1)
      }
    })
  }

  listanime(){
    return this.animelist.asObservable();
  }

  removeallitem(){
    this.watchlistanime=[];
    this.animelist.next(this.watchlistanime);
  }


  // manga
  upcomming(): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+'seasons/upcoming');
  }
  manga(): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+'top/manga');
  }

  mangadetail(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/full`);
  }

  mangacharacter(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/characters`)
  }

  mangarecommdation(id:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/recommendations`)
  }

  searchmanga(name:any): Observable <any>{
    return this.http.get(this.api.Api_Endpoint+`manga?q=${name}`)
  }



}


