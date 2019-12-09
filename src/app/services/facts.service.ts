import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(private httpClient: HttpClient) { }

  getFact(): Observable<any> {
    return this.httpClient.get("https://api.chucknorris.io/jokes/random");
  }

  getCategoryFact(category: any): Observable<any> {
    return this.httpClient.get("https://api.chucknorris.io/jokes/random?category=" + category);
  }

  getCategories(): Observable<any> {
    return this.httpClient.get("https://api.chucknorris.io/jokes/categories");
  }

  getFactBySearch(query: any): Observable<any> {
    return this.httpClient.get("https://api.chucknorris.io/jokes/search?query=" + query);
  }

  addFavoriteFacts(fav: any): Observable<any> {
    let favJson = JSON.stringify(fav);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.post("http://localhost:3000/favorites", favJson, {headers: headers});
  }

  getFavorites(): Observable<any> {
    return this.httpClient.get("http://localhost:3000/favorites");
  }
}
