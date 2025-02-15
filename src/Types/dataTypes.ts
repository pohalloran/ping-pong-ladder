export interface BasePlayer {
    firstName: string;
    lastName: string;
    email: string;
    elo: number;
    wins: number;
    losses: number;
    office: string;
}

export interface Player extends BasePlayer {
    id: string;
}

export interface Standing extends Omit<Player, 'email' | 'office'> {
    rank: number;
}

export enum Office {
    PGH = 'PGH',
    DC = 'DC',
    InterOffice = 'Inter-Office',
}

export interface Result {
    playerA: Player | '';
    playerB: Player | '';
    playerAScore: number;
    playerBScore: number;
    office: Office;
}

export interface MatchInfo {
    winnerScore: number;
    loserScore: number;
    winnerId: string;
    loserId: string;
    office: Office;
    date: string;
}
