import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  mangadata: any;
  searchdata:any;
  showsearch: boolean=false
  showtop: boolean=true;
  title: any;

  constructor(private api :ApiService){}
  ngOnInit(): void {
    if(this.title==null){
      this.manga()
    }
    else{
      this.searchmanga(this.title)
    }
  }

  searchname(search:any){
    this.title = search
    this.searchmanga(search)
    this.showtop=false;
    this.showsearch = true
  }

  manga(){
    this.api.manga().subscribe((res)=>{this.mangadata=res,console.log(res)},(err)=>{console.log(err)})
  }

  searchmanga(search:any){
    this.api.searchmanga(search).subscribe((res:any)=>{this.searchdata = res.data,console.log(res)},(err)=>{console.log(err)})
  }

}
