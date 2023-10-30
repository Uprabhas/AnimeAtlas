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
  pageadd: any=1;

  constructor(private api :ApiService){}
  ngOnInit(): void {
    if(this.title==null){
      this.manga(this.pageadd)
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

  manga(page:any){
    this.api.manga(page).subscribe((res)=>{this.mangadata=res,console.log(res)},(err)=>{console.log(err)})
  }

  searchmanga(search:any){
    this.api.searchmanga(search).subscribe((res:any)=>{this.searchdata = res.data,console.log(res)},(err)=>{console.log(err)})
  }

  addpage(){
    this.manga(this.pageadd);
    this.pageadd +=1
    console.log(this.pageadd)
  }

  subpage(){
    this.manga(this.pageadd);
    this.pageadd -=1
    console.log(this.pageadd)
  }


}
