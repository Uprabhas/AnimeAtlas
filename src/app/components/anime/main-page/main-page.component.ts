import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as _ from 'lodash';

import { BehaviorSubject, Observable, scan, switchMap, tap } from 'rxjs';
import { data } from '../../models/model';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  Topanime: data[] | any = [];
  title: any;
  searchanimeresult: any;
  addlist: boolean = true;
  removelist: boolean = false
  showtop: boolean = true;
  showsearch: boolean = false
  pageadd: any = 1;
  wishlist:any;




  private page$ = new BehaviorSubject(1);

  constructor(private api: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    if (this.title! == null) {
      this.getTopanime(this.pageadd);
    } else {
      this.searchanime(this.title, this.pageadd)

    }
  }

  

  // public loadProducts$(): Observable<ProductsPaginator> {
  //   return this.page$.pipe(
  //     tap(() => this.loading$.next(true)),
  //     switchMap((page) => this.api.topAnime(page)),
  //     scan(this.updatePaginator, {data: [], page: 1, hasMorePages: true} as ProductsPaginator),
  //     tap(() => this.loading$.next(false)),
  //   );
  // }

  // private updatePaginator(accumulator: ProductsPaginator, value: ProductsPaginator): ProductsPaginator {
  //   if (value.page === 1) {
  //     return value;
  //   }
  //   accumulator.data.push(...value.data);
  //   accumulator.page = value.page;
  //   accumulator.hasMorePages = value.hasMorePages;

  //   return accumulator;
  // }

  // public loadMoreProducts(paginator: ProductsPaginator) {
  //   if (!paginator.hasMorePages) {
  //     return;
  //   }
  //   this.page$.next(paginator.page + 1);
  // }




  onsearch(search: any) {
    this.title = search
    console.log(search)
    this.searchanime(search, this.pageadd)
    this.showtop = false;
    this.showsearch = true;
  }



  getTopanime(pageno: any) {
    this.api.topAnime(pageno).subscribe((res: data[]) => { this.Topanime = res, console.log(this.Topanime) }, (err) => { console.log(err) })
  }

  searchanime(name: any, page: any) {
    setTimeout(() => {
      this.api.searchable(name, page).subscribe((res: any) => { this.searchanimeresult = res.data, console.log(res) }, (err) => { console.log(err) })
    }, 1000);
  }

  addwatchlish(item: any,id:any,i:any) {
    console.log(i)
    this.api.Addwatchlistanime(item)
    this.api.listanime().subscribe((res:any)=>{console.log(res),this.wishlist=res});
    console.log(id)
    this.wishlist.forEach((data: any) => {
      if(data.mal_id===id){
        this.addlist=false;
        this.removelist=true
      }
    });
  }

  removewatchlist(item: any,id:any) {
    this.api.removewatchlistanime(item);
    this.addlist = true;
    this.removelist = false;
    console.log(id)
  }


  addpage() {
    this.pageadd += 1
    console.log(this.pageadd)
    this.getTopanime(this.pageadd);
    this.searchanime(this.title, this.pageadd)
  }

  subpage() {
    this.pageadd -= 1
    console.log(this.pageadd)
    this.getTopanime(this.pageadd);
    this.searchanime(this.title, this.pageadd)
  }

  onScroll() {
    this.api.topAnime(++this.pageadd)
      .subscribe((data: data[]) => {
        this.Topanime.push(...data);
        console.log(this.Topanime)
      });
  }







}

