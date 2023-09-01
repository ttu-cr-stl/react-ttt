export type PlayerNameType = {
    Player_X: string;
    Player_O: string;
}

export enum Player {
    X = 'X',
    O = 'O',
}

export type SquareArray = Array<Player | null>;

export type Score = {
    player_X: string;
    player_O: string;
    winner: string;
    board: SquareArray;
    date: string;
}
