import { Injectable } from '@angular/core';
import { Conference } from '../../models/conference.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor() { }

  private conferences: Conference[] = [
    {shortcut: 'AAC', logo:'../../../assets/conferences/aac.png'},
    {shortcut: 'ACC', logo:'../../../assets/conferences/acc.png'},
    {shortcut: 'B12', logo:'../../../assets/conferences/big12.png'},
    {shortcut: 'B1G', logo:'../../../assets/conferences/big10.png'},
    {shortcut: 'CUSA', logo:'../../../assets/conferences/cusa.png'},
    {shortcut: 'Ind', logo:'../../../assets/conferences/ind.png'},
    {shortcut: 'MAC', logo:'../../../assets/conferences/mac.png'},
    {shortcut: 'MWC', logo:'../../../assets/conferences/mwc.png'},
    {shortcut: 'PAC', logo:'../../../assets/conferences/pac12.png'},
    {shortcut: 'SBC', logo:'../../../assets/conferences/sbc.png'},
    {shortcut: 'SEC', logo:'../../../assets/conferences/sec.png'},
  ]

  getConferences(): Conference[]{
    return this.conferences;
  }
}
