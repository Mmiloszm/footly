import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/core/models/game.model';
import { TeamsScoresStatsService } from 'src/app/core/services/api/teams-scores-stats.service';
import { ShareSelectedTeamService } from 'src/app/core/services/games/share-selected-team.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  games: Array<Game> = [];
  teamName: string = '';
  sub: Subscription | undefined;

  constructor(
    private shareSelectedTeamService: ShareSelectedTeamService,
    private teamsScoresStatsService: TeamsScoresStatsService
  ) {}

  team = this.shareSelectedTeamService.sharedTeam$.subscribe((name) => {
    this.teamName = name;
    this.fetchGames(name);
  });

  fetchGames(name: string) {
    if (name) {
      this.sub = this.teamsScoresStatsService
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
