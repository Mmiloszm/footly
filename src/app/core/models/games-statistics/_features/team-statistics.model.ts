import { Statistics } from "./_features/statistics.model";

export interface TeamStatistics {
    school: string;
    conference: string;
    homeAway: string;
    points: number;
    stats: Statistics[];
}
