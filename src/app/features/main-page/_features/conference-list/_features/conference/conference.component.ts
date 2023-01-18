import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Conference } from 'src/app/core/models/conferences/conference.model';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent{

  @Input() conference!: Conference;

  @Output() selectedConference = new EventEmitter<string>();

  selectConference(name: string){
    this.selectedConference.emit(name);
  }


}
