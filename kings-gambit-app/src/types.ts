export type Game = {
  player: number;
  player1Pieces: Record<string, number>;
  player2Pieces: Record<string, number>;
  board: BoardData[];
  activePiece?: Piece | null;
};

export type BoardData = {
  position: Position;
  piece?: string | null;
  sprite?: string | null;
  player?: number | null;
};

export type Piece = {
  piece?: string | null;
  position?: Position | null;
  moves?: Position[] | null;
};

type Position = {
  x: number;
  y: number;
};
