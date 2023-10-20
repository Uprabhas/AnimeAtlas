import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  mangadata: any;

  constructor(private api :ApiService){}
  ngOnInit(): void {
    this.manga()
  }

  manga(){
    this.api.manga().subscribe((res)=>{this.mangadata=res,console.log(res)},(err)=>{console.log(err)})
  }

}
