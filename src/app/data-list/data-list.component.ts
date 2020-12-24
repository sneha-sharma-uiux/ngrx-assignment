import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../display-data/display-data.component';
import { Store, select } from "@ngrx/store";


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})


export class DataListComponent implements OnInit {
  constructor(private store: Store<any>) { }

  @Input() Photos: Product[] = [];
  
  ngOnInit(): void {
  }


}
