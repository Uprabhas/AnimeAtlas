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
    
  }
  

}
