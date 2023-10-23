import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mangadetail',
  templateUrl: './mangadetail.component.html',
  styleUrls: ['./mangadetail.component.css']
})
export class MangadetailComponent implements OnInit {
  detaildata: any;
  recommdation: any;
  authors!: string;
  studios!: string;

  constructor(private api: ApiService, private activatedrouter: ActivatedRoute, private router: Router) {
    
   }
  ngOnInit(): void {
    this.mangadetail()
    
  }

  mangadetail() {
    let mal_id = this.activatedrouter.snapshot.paramMap.get("mal_id")
    console.log(mal_id)
    mal_id && this.api.mangadetail(mal_id).subscribe((res:any) => { this.detaildata = res.data, console.log(this.detaildata) });
    mal_id && this.api.mangarecommdation(mal_id).subscribe((res:any) => { this.recommdation = res, console.log("recommdation",this.recommdation) });
    this.authors=this.detaildata.authors[0].name
    this.studios=this.detaildata.studios[0].name
  }

  getrecommdationanime() {

  }
  

 

}