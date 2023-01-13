import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getGames(team: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/games/2022/${team}`);
  }
}
