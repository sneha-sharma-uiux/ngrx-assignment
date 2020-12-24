import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../display-data/display-data.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private store: Store<any>) {
    this.data= this.store.select('photo')
    store.pipe(select('photo')).subscribe(data => (this.items = data.items));
    
  }
  
  items: Product[] = [];
  data:Observable<any>
  photos:any

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.data.subscribe(res=> this.photos = res)
  }

  searchByTitle(val){
    this.items = this.photos.items.filter(res => res.title === val);    
  }

}
