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
    Player_X: string;
    Player_O: string;
    Winner: string;
    Board: SquareArray;
}
