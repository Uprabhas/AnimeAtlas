import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  characterdata: any;

  constructor(private api :ApiService,private activatedrouter:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.mangadetail()
  }

  mangadetail(){
    let mal_id = this.activatedrouter.snapshot.paramMap.get("mal_id")
    console.log(mal_id)
    mal_id && this.api.mangacharacter(mal_id).subscribe((res)=>{this.characterdata=res,console.log(this.characterdata)})
  }

}
