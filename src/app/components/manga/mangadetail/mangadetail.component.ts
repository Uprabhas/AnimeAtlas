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
  mal_id:any;

  constructor(private api: ApiService, private activatedrouter: ActivatedRoute, private router: Router) {
    
   }
  ngOnInit(): void {
    this.mangadetail()
    
  }

  mangadetail() {
    this.mal_id = this.activatedrouter.snapshot.paramMap.get("mal_id")
    console.log(this.mal_id)
    this.mal_id && this.api.mangadetail(this.mal_id).subscribe((res:any) => { this.detaildata = res.data, console.log(this.detaildata) });
    this.mal_id && this.api.mangarecommdation(this.mal_id).subscribe((res:any) => { this.recommdation = res, console.log("recommdation",this.recommdation) });
    // this.authors=this.detaildata.authors[0].name
    // this.studios=this.detaildata.studios[0].name
  }

  getrecommdationmanga(id:any) {
    
    this.mal_id = id
    console.log(this.mal_id)
    this.mal_id && this.api.mangadetail(this.mal_id).subscribe((res:any) => { this.detaildata = res.data, console.log(this.detaildata) });
    this.mal_id && this.api.mangarecommdation(this.mal_id).subscribe((res:any) => { this.recommdation = res, console.log("recommdation",this.recommdation) });
    this.router.navigateByUrl(this.router.url.replace(this.mal_id, id))

  }
  

 

}