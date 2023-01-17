import { Location } from "./_features/location.model";

export interface School {
    id: number;
    school: string;
    mascot: string;
    abbreviation: string;
    alt_name1?: any;
    alt_name2?: any;
    alt_name3?: any;
    conference: string;
    classification: string;
    color: string;
    alt_color: string;
    logos: string[];
    twitter: string;
    location: Location;
}