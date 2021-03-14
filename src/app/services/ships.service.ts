import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
// Interfaces
import { Ships } from '../interfaces/ships';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/';
  shipImagesUrl: string = 'https://starwars-visualguide.com/assets/img/starships/';
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  };
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor( private http: HttpClient ) {}

  getShips(page?: number): Observable<Ships[]> {
    return this.http.get(page ? this.url + '?page=' + page : this.url).pipe( 
      map( (data: Ships[]) => { return data })
    );
  }

  getShipImagesUrl(): string {
    return this.shipImagesUrl;
  }

}
