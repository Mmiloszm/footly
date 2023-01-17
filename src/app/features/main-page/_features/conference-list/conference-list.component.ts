import { Component, OnInit} from '@angular/core';
import { conferencesMap } from 'src/app/core/constants/conferences/conference-map';



@Component({
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.scss']
})
export class ConferenceListComponent implements OnInit{


  selectedConference: string | undefined;
  conferences: Map<string,string> = new Map();

  ngOnInit(): void {
    this.assignConferences();
  }

  assignConferences(){
    this.conferences = conferencesMap;
  }

  saveSelectedConference(name: string){
    this.selectedConference = name;
  }
}
