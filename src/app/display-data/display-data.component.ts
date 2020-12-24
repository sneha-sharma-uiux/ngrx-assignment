import { Component, OnInit } from '@angular/core';
import{CommonServiceService} from '../common-service.service';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';
import { Store, select } from "@ngrx/store";

export interface Product {
  albumId:number;
  id:number;
  title:string;
  url:string;
  thumbnailUrl:string;
}

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})

export class DisplayDataComponent implements OnInit {
  
  constructor(private store: Store<any>) {}

  
  @Input() product: Product;

  
  ngOnInit() {}
}
