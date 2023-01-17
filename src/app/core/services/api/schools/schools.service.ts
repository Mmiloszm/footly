import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {School} from '../../../models/schools/school.model'

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient: HttpClient) { }

  getSchools(conference: string): Observable<School[]> {
    return this.httpClient.get<School[]>(`http://localhost:3000/api/teams/${conference}`);
  }

}
