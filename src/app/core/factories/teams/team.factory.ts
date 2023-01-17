import { Injectable } from "@angular/core";
import { School } from "../../models/schools/school.model";
import { Team } from "../../models/teams/team.model";


@Injectable({providedIn: 'root'})
export class TeamFactory {

    createTeams(schoolsInfo: Array<School>): Team[]{
        let teams: Team[] = [];
        let length = schoolsInfo.length < 10 ? schoolsInfo.length : 10;
        for (let school of schoolsInfo.slice(0, length)){
            teams.push(
                {
                    name: school['school'],
                    logo: school['logos'][0]
                }
            )
        }
        return teams;
    }
}