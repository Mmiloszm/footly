import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Team } from 'src/app/core/models/team.model';
import { TeamsScoresStatsService } from '../../../../../../core/services/api/teams-scores-stats.service'

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit{

  @Input() conferenceName: string = '';

  private teamsInfo: Array<any> = [];
  public mappedTeams: Array<Team> = [];

  constructor(private teamScoresStatsService: TeamsScoresStatsService) {
   }

   ngOnInit(): void {
    this.fetchTeams();
   }


  fetchTeams(){
    this.teamScoresStatsService.getTeams(this.conferenceName).subscribe(data =>{
      this.teamsInfo = data;
      this.mapTeams();
    },
    err => {
      console.log(err);
    });
  }

  mapTeams(){
    var length = this.teamsInfo.length < 10 ? this.teamsInfo.length : 10
    for(let team of this.teamsInfo.slice(0, length)){
      this.mappedTeams.push(
        {
          name: team['school'],
          logo: team['logos'][0]
        }
      )
    }
  }

}
