import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-anime-characters',
  templateUrl: './anime-characters.component.html',
  styleUrls: ['./anime-characters.component.css']
})
export class AnimeCharactersComponent implements OnInit {
  character: any;

  constructor(private api:ApiService, private activatedrouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.getcharacter()
  }

  getcharacter(){
    let mal_id=this.activatedrouter.snapshot.paramMap.get("mal_id")
    console.log("id",mal_id)
    mal_id && this.api.animecharacters(mal_id).subscribe((res)=>{this.character=res,console.log(this.character)})
  }

}
