import { Component, OnInit } from '@angular/core';
import { Conference } from 'src/app/core/models/conference.model';
import { ConferenceService } from 'src/app/core/services/conference.service';

@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent{

  selectedConference: string = '';
  conferences: Array<Conference> = [];
  constructor(private conferenceService: ConferenceService) { 
    this.assignConferences();
  }

  assignConferences(){
    this.conferences = this.conferenceService.getConferences();
  }

  saveSelectedConference(name: string){
    this.selectedConference = name;
    console.log(this.selectedConference);
  }
}
