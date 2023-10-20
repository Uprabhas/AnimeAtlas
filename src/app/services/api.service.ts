import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // Anime
  searchanime(name:any){
    return this.http.get(`https://api.jikan.moe/v4/anime?q=${name}`)
  }
  topAnime(){
    return this.http.get('https://api.jikan.moe/v4/top/anime');
  }
  detailanime(id:any){
    return this.http.get(`https://api.jikan.moe/v4/anime/${id}/full`);
  }
  animerecommdation(id:any){
    return this.http.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`)
  }
  animecharacters(id:any){
    return this.http.get(`https://api.jikan.moe/v4/anime/${id}/characters`)
  }
  animevideos(id:any){
    return this.http.get(`https://api.jikan.moe/v4/anime/${id}/videos`);
  }



  // manga
  upcomming(){
    return this.http.get('https://api.jikan.moe/v4/seasons/upcoming');
  }
  manga(){
    return this.http.get('https://api.jikan.moe/v4/top/manga');
  }

  mangadetail(id:any){
    return this.http.get(`https://api.jikan.moe/v4/manga/${id}`);
  }

  mangacharacter(id:any){
    return this.http.get(`https://api.jikan.moe/v4/manga/${id}/characters`)
  }



}


