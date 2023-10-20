import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-anime-in-detail',
  templateUrl: './anime-in-detail.component.html',
  styleUrls: ['./anime-in-detail.component.css']
})
export class AnimeInDetailComponent implements OnInit{
  detailanime:any;
  recommadation:any;

  constructor(private api :ApiService,private activatedrouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
   this.getdetailanime()    
  }

  getdetailanime(){
    let mal_id = this.activatedrouter.snapshot.paramMap.get('mal_id')
    console.log("id",mal_id)
    mal_id && this.api.detailanime(mal_id).subscribe((res:any)=>{this.detailanime=res,console.log(this.detailanime)},(err)=>{console.log(err)});
    mal_id && this.api.animerecommdation(mal_id).subscribe((res)=>{this.recommadation=res,console.log(res)},(err)=>{console.log(err)})
  }

  getrecommdationanime(){
    this.router.navigateByUrl("/anime-in-detail/this.recommadation.data.entry.mal_id")
    location.reload()
    this.getdetailanime()
    // let mal_id = this.activatedrouter.snapshot.paramMap.get('mal_id')
    // console.log("id",mal_id)
    // mal_id && this.api.detailanime(mal_id).subscribe((res:any)=>{this.detailanime=res,console.log(this.detailanime)},(err)=>{console.log(err)});
    // mal_id && this.api.animerecommdation(mal_id).subscribe((res)=>{this.recommadation=res,console.log(res)},(err)=>{console.log(err)})
    
  }

  



}
