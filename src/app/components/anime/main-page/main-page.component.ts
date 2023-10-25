import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Topanime: any;
  title:any;
  searchanimeresult: any;
  showtop:boolean=true;
  showsearch:boolean=false

  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    if(this.title! == null){
    this.getTopanime();
    }else{
      this.searchanime(this.title)
    }
  }

   searchname(search:any){
    this.title = search
    console.log(search)
    this.searchanime(search)
    this.showtop=false;
    this.showsearch=true;
  }



  getTopanime() {
    this.api.topAnime().subscribe(
      (res: any) => { console.log(res), this.Topanime = res }, (err) => { console.log(err) })
     
  }

  searchanime(name:any){
 this.api.searchable(name).subscribe((res:any) => {this.searchanimeresult=res.data ,console.log(res) }, (err) => { console.log(err) })
    
  }

  addwatchlish(item:any){
    this.api.Addwatchlistanime(item)
  }

  removewatchlist(item:any){
    this.api.removewatchlistanime(item);
  }


  // getTop(id:any) {
  //   console.log(id)
  //   this.api.detailanime(id);
  // }

  


}

