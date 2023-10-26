import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  showanime: any=[];
  constructor(private api:ApiService) { }
  ngOnInit(): void {
    this.listanime()
  }

  listanime(){
    this.api.listanime().subscribe((res: any)=>{this.showanime=res,console.log(res.length)})
  }

  removewatchlist(item:any){
    this.api.removewatchlistanime(item)
  }

  remove_all(){
    this.api.removeallitem()
  }

}
