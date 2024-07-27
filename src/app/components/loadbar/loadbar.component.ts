import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loadbar',
  templateUrl: './loadbar.component.html',
  styleUrls: ['./loadbar.component.css']
})
export class LoadbarComponent {

  constructor(private loader:LoaderService){}

  loadbar =this.loader.isLoading$

}
