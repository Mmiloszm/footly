import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

  getTeams(conference: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/teams/${conference}`);
  }

}
