import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-anime-vieos',
  templateUrl: './anime-vieos.component.html',
  styleUrls: ['./anime-vieos.component.css']
})
export class AnimeVieosComponent implements OnInit {
  videosdata: any;


  constructor (private api :ApiService,private activatedrouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.animevideos()
    
    
  }

  animevideos(){
    let mal_id =this.activatedrouter.snapshot.paramMap.get("mal_id");
    console.log("id",mal_id)
    mal_id && this.api.animevideos(mal_id).subscribe((res)=>{this.videosdata=res,console.log(this.videosdata)},(err)=>{console.log(err)})
  }

}
