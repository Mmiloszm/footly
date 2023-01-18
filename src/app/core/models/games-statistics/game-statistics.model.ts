import { TeamStatistics } from "./_features/team-statistics.model";

export interface GameStatistics {
    id: number;
    teams: TeamStatistics[];
}
