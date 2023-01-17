import { Component, Input} from '@angular/core';
import { Team } from 'src/app/core/models/teams/team.model';
import { ShareSelectedTeamService } from 'src/app/core/services/games/share-selected-team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent{

  @Input() team: Team = {
    name: '',
    logo: ''
  };

  constructor(private shareSelectedTeamService: ShareSelectedTeamService) { }

  shareTeam(){
    this.shareSelectedTeamService.setTeam(this.team.name);
  }

}
