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
  trailer!:any
  mal_id: any;
  addList: boolean=true
  removelist: boolean=false

  constructor(private api :ApiService,private activatedrouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
   this.getdetailanime()    
  }

  getdetailanime(){
    this.mal_id = this.activatedrouter.snapshot.paramMap.get('mal_id')
    console.log("id",this.mal_id)
    this.mal_id && this.api.detailanime(this.mal_id).subscribe((res:any)=>{this.detailanime=res,console.log(this.detailanime)},(err)=>{console.log(err)});
    this.mal_id && this.api.animerecommdation(this.mal_id).subscribe((res:any)=>{this.recommadation=res,console.log(res)},(err)=>{console.log(err)})
    this.mal_id && this.api.animevideos(this.mal_id).subscribe((res)=>{this.trailer=res,console.log(res)},(err)=>{console.log(err)})
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


  getRecomdation(id:any){
    let idx = id.entry.mal_id
    console.log(idx)
    this.mal_id = idx
    console.log("id",this.mal_id)
    this.mal_id && this.api.detailanime(this.mal_id).subscribe((res:any)=>{this.detailanime=res,console.log(this.detailanime)},(err)=>{console.log(err)});
    this.mal_id && this.api.animerecommdation(this.mal_id).subscribe((res)=>{this.recommadation=res,console.log(res)},(err)=>{console.log(err)})
    this.mal_id && this.api.animevideos(this.mal_id).subscribe((res)=>{this.trailer=res,console.log(res)},(err)=>{console.log(err)})

    this.router.navigateByUrl(this.router.url.replace(this.mal_id, idx))
   
  }
  
  addwatchlish(item:any){
    this.api.Addwatchlistanime(item)
    this.addList=false;
    this.removelist=true
  }

  removewatchlist(item:any){
    this.api.removewatchlistanime(item);
    this.addList=true;
    this.removelist=false;
  }



}
