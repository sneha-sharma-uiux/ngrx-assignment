import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import{DataListComponent} from './data-list/data-list.component';
import {HomeComponent} from './home/home.component'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from "@ngrx/store";
import { reducer } from './store/reducer';
import { ShopEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDataComponent,
    DataListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({photo: reducer}),
    EffectsModule.forRoot([ShopEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
