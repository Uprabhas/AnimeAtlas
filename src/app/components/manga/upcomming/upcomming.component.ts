import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit{


  upcomingdata:any

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.upcoming()
  }

  upcoming(){
    this.api.upcomming().subscribe((res)=>{this.upcomingdata=res,console.log(res)},(err)=>{console.log(err)})
  }

}
