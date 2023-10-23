import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Topanime: any;
  title: any;
  constructor(private api: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.getTopanime();

  }
  @ViewChild(NavbarComponent) navbar:any;

  getTopanime() {
    this.api.topAnime().subscribe(
      (res: any) => { console.log(res), this.Topanime = res }, (err) => { console.log(err) })
      this.title = this.navbar.title
      console.log(this.title)
  }

  searchanime(){
    this.api.searchable(this.title).subscribe((res) => { console.log(res) }, (err) => { console.log(err) })
    this.title = this.navbar.title
  }



  // getTop(id:any) {
  //   console.log(id)
  //   this.api.detailanime(id);
  // }

  


}

