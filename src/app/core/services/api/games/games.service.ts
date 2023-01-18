import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameStatistics } from 'src/app/core/models/games-statistics/game-statistics.model';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) { }

  getGames(team: string): Observable<GameStatistics[]> {
    return this.httpClient.get<GameStatistics[]>(`http://localhost:3000/api/games/2022/${team}`);
  }
}
