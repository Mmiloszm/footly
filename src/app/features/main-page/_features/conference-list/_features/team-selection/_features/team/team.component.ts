import { Component, Input} from '@angular/core';
import { Team } from 'src/app/core/models/team.model';
import { ShareSelectedTeamService } from 'src/app/core/services/games/share-selected-team.service';
import { TeamSelectionService } from 'src/app/core/services/modals/team-selection.service';

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

  constructor(private shareSelectedTeamService: ShareSelectedTeamService,
    private teamSelectionService: TeamSelectionService) { }

  shareTeam(){
    this.shareSelectedTeamService.setTeam(this.team.name);
    this.teamSelectionService.showDialog = false;
  }

}
