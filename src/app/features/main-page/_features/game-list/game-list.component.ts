import { Component, OnInit } from '@angular/core';
import { GameStatistics } from 'src/app/core/models/games-statistics/game-statistics.model';
import { GamesService } from 'src/app/core/services/api/games/games.service';
import { ShareSelectedTeamService } from 'src/app/core/services/games/share-selected-team.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  games: Array<GameStatistics> = [];
  teamName: string | undefined;

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
          this.games = data;
        });
    }
  }

}
