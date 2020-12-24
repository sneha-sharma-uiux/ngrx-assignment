import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {
  
  constructor(private http: HttpClient) { }

  getPhotos():Observable<any>{
    const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
    return this.http.get(url)
  }
}
