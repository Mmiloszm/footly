import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/core/models/team.model';

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

  constructor() { }

}
