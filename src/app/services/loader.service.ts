import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private apirun =0;

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();


  constructor() { }

  showLoader(){
    if(this.apirun === 0){
      this.isLoadingSubject.next(true)
    }
    this.apirun++;
  }

  hideLoader(){
    this.apirun--;
    if(this.apirun === 0){
      this.isLoadingSubject.next(false)
    }
  }
}
