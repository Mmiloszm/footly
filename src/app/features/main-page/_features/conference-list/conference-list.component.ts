import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/core/models/conference.model';
import { SetupConferencesService } from 'src/app/core/services/conferences/setup-conferences.service';
import { TeamSelectionService } from 'src/app/core/services/modals/team-selection.service';


@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent{

  selectedConference: string = '';
  conferences: Array<Conference> = [];

  constructor(private setupConferencesService: SetupConferencesService,
    public teamSelectionService: TeamSelectionService) { 
    this.assignConferences();
  }

  assignConferences(){
    this.conferences = this.setupConferencesService.getConferences();
  }

  saveSelectedConference(name: string){
    this.selectedConference = name;
    this.teamSelectionService.showDialog = true;
  }
}
