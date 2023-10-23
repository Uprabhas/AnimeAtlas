import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title!:string;
  myform:FormGroup;

  constructor(private api:ApiService,private router:Router,private fb:FormBuilder){
    this.myform = this.fb.group({
      name:''
    })
  }

  

  Onsubmitform() {

this.title=this.myform.value;
console.log(this.title)
this.api.searchable(this.myform.value)
// this.router.navigateByUrl('/searchanime/{{this.title}}',)

// location.reload()



}

}
