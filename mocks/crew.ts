import { Crew, Faction } from "../src/models/crew";

export const TESTFACTION: Faction = {
    FactionId: 0,
    FactionName: "Outlaws"
}
export const MOCKCREW: Crew = {
    CrewId: 0,
    CrewName: "Test Crew",
    Faction: TESTFACTION,
    Heroes: [],
    Henchmen: [],
    Money: 200
}

export const MOCKCREWS: Crew[] = [
    MOCKCREW
]