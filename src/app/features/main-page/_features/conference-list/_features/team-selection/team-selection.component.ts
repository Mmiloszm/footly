import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, Subscription } from 'rxjs';
import { Team } from 'src/app/core/models/team.model';
import { TeamsScoresStatsService } from '../../../../../../core/services/api/teams-scores-stats.service'

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit, OnDestroy{

  @Input() conferenceName: string = '';

  public teams: Array<Team> = [];
  sub: Subscription | undefined;

  constructor(private teamScoresStatsService: TeamsScoresStatsService) {
   }

   ngOnInit(): void {
    this.fetchTeams();
   }

   ngOnDestroy(): void {
     if (this.teamScoresStatsService){
      this.sub?.unsubscribe();
     }
   }


  fetchTeams(){
    this.sub = this.teamScoresStatsService.getTeams(this.conferenceName).subscribe(data =>{
      this.mapTeams(data);
    },
    err => {
      console.log(err);
    });
  }

  mapTeams(teamsInfo: Array<any>){
    var length = teamsInfo.length < 10 ? teamsInfo.length : 10
    for(let team of teamsInfo.slice(0, length)){
      this.teams.push(
        {
          name: team['school'],
          logo: team['logos'][0]
        }
      )
    }
  }

}
