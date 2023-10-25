import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api:any=environment

  constructor(private http:HttpClient) { }

  // Anime
  searchable(name:any) {
    return this.http.get(this.api.Api_Endpoint+`anime?q=${name}`)
  }
  topAnime(){
    return this.http.get(this.api.Api_Endpoint+"top/anime");
  }
  detailanime(id:any){
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/full`);
  }
  animerecommdation(id:any){
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/recommendations`)
  }
  animecharacters(id:any){
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/characters`)
  }
  animenews(id:any){
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/news`);
  }
  animevideos(id:any){
    return this.http.get(this.api.Api_Endpoint+`anime/${id}/videos`);
  }
 




  // manga
  upcomming(){
    return this.http.get(this.api.Api_Endpoint+'seasons/upcoming');
  }
  manga(){
    return this.http.get(this.api.Api_Endpoint+'top/manga');
  }

  mangadetail(id:any){
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/full`);
  }

  mangacharacter(id:any){
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/characters`)
  }

  mangarecommdation(id:any){
    return this.http.get(this.api.Api_Endpoint+`manga/${id}/recommendations`)
  }

  searchmanga(name:any){
    return this.http.get(this.api.Api_Endpoint+`manga?q=${name}`)
  }



}


