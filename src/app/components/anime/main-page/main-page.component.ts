import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Topanime: any;
  title: any;
  searchanimeresult: any;
  addlist: boolean = true;
  removelist: boolean = false
  showtop: boolean = true;
  showsearch: boolean = false

  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    if (this.title! == null) {
      this.getTopanime();
    } else {
      this.searchanime(this.title)

    }
  }


  onsearch(search: any) {
    this.title = search
    console.log(search)
    this.searchanime(search)
    this.showtop = false;
    this.showsearch = true;
  }



  getTopanime() {
    this.api.topAnime().subscribe(
      (res: any) => { console.log(res), this.Topanime = res }, (err) => { console.log(err) })

  }

  searchanime(name: any) {
   
    setTimeout(() => {
      this.api.searchable(name).subscribe((res: any) => { this.searchanimeresult = res.data, console.log(res) }, (err) => { console.log(err) })
    }, 1000);
  }

  addwatchlish(item: any) {
    this.api.Addwatchlistanime(item)
    this.addlist = false;
    this.removelist = true
  }

  removewatchlist(item: any) {
    this.api.removewatchlistanime(item);
    this.addlist = true;
    this.removelist = false;
  }







}

