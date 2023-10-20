import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Topanime: any;
  constructor(private api: ApiService, private router:Router) { }
  ngOnInit(): void {
    this.getTopanime();
  }

  getTopanime() {
    this.api.topAnime().subscribe(
      (res: any) => { console.log(res), this.Topanime = res }, (err) => { console.log(err) })
  }



  getTop(id:any) {
    console.log(id)
    this.api.detailanime(id);
  }



}

