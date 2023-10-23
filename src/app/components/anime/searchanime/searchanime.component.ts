import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchanime',
  templateUrl: './searchanime.component.html',
  styleUrls: ['./searchanime.component.css']
})
export class SearchanimeComponent implements OnInit {
getTop(arg0: any) {

  
}

  searchanime:any;

  constructor(private Api:ApiService,private activatedrouter:ActivatedRoute){}
  ngOnInit(): void {
    this.getsearchdata()
  }
  getsearchdata(){
    let title = this.activatedrouter.snapshot.paramMap.get('title')
    
    console.log('name',title)
    title && this.Api.searchable(title).subscribe((res)=>{this.searchanime=res,console.log(res)},(err)=>{console.log(err)})
  }

}
