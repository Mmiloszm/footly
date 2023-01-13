import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/models/game.model';
import { GamesService } from 'src/app/core/services/api/games/games.service';
import { ShareSelectedTeamService } from 'src/app/core/services/games/share-selected-team.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  games: Array<Game> = [];
  teamName: string = '';

  constructor(
    private shareSelectedTeamService: ShareSelectedTeamService,
    private gamesService: GamesService
  ) {}

  team = this.shareSelectedTeamService.sharedTeam$.subscribe((name) => {
    this.teamName = name;
    this.fetchGames(name);
  });

  fetchGames(name: string) {
    if (name) {
       this.gamesService
        .getGames(name)
        .subscribe((data) => {
          this.mapGames(data);
        });
    }
  }

  mapGames(gamesInfo: Array<any>) {
    this.games = [];
    for (let game of gamesInfo) {
      this.games.push({
        teamA: game['home_team'],
        scoreA: game['home_points'],
        scoreB: game['away_points'],
        teamB: game['away_team'],
      });
    }
  }
}
