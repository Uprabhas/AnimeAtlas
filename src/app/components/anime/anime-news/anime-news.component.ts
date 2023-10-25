import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-anime-news',
  templateUrl: './anime-news.component.html',
  styleUrls: ['./anime-news.component.css']
})
export class AnimeNewsComponent implements OnInit {
  News:any;

  constructor (private api :ApiService,private activatedrouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.animenews()
    
  }

  animenews(){
    let mal_id =this.activatedrouter.snapshot.paramMap.get("mal_id");
    console.log("id",mal_id)
    mal_id && this.api.animenews(mal_id).subscribe((res:any)=>{this.News=res.data,console.log(this.News)},(err)=>{console.log(err)})
  }

}
