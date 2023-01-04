export interface Crew {
    CrewId: number;
    CrewName: string;
    Faction: Faction;
    Heroes: [];
    Henchmen: [];
    Money: number;
}

export interface Faction {
    FactionId: number;
    FactionName: string;
}

export interface Character {
    CharacterId: string;
    CharacterName: string;
}