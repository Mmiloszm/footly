import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareSelectedTeamService {

  constructor() { }

  private teamSource = new BehaviorSubject("");

  // sharedTeam = this.teamSource.asObservable();

  sharedTeam$: Observable<string> = this.teamSource;

  setTeam(name: string){
    this.teamSource.next(name);
  }
}
