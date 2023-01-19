import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareSelectedTeamService {

  constructor() { }

  private teamSource = new BehaviorSubject("");

  sharedTeam$: Observable<string> = this.teamSource.asObservable();

  setTeam(name: string){
    this.teamSource.next(name);
  }
}
