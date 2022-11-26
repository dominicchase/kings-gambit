import { bishop, king, knight, pawn, rook, queen } from "./sprites";
import { Game } from "./types";

export const INITIAL_STATE = {
  player: 1,
  player1Pieces: { bishop: 2, king: 1, knight: 2, pawn: 8, rook: 2, queen: 1 },
  player2Pieces: { bishop: 2, king: 1, knight: 2, pawn: 8, rook: 2, queen: 1 },
  board: [
    { position: { x: 1, y: 1 }, piece: "rook", sprite: rook[1], player: 1 },
    { position: { x: 2, y: 1 }, piece: "knight", sprite: knight[1], player: 1 },
    { position: { x: 3, y: 1 }, piece: "bishop", sprite: bishop[1], player: 1 },
    { position: { x: 4, y: 1 }, piece: "king", sprite: king[1], player: 1 },
    { position: { x: 5, y: 1 }, piece: "queen", sprite: queen[1], player: 1 },
    { position: { x: 6, y: 1 }, piece: "bishop", sprite: bishop[1], player: 1 },
    { position: { x: 7, y: 1 }, piece: "knight", sprite: knight[1], player: 1 },
    { position: { x: 8, y: 1 }, piece: "rook", sprite: rook[1], player: 1 },

    { position: { x: 1, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 2, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 3, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 4, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 5, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 6, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 7, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },
    { position: { x: 8, y: 2 }, piece: "pawn", sprite: pawn[1], player: 1 },

    { position: { x: 1, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 2, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 3, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 4, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 5, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 6, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 7, y: 3 }, piece: null, sprite: null, player: null },
    { position: { x: 8, y: 3 }, piece: null, sprite: null, player: null },

    { position: { x: 1, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 2, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 3, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 4, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 5, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 6, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 7, y: 4 }, piece: null, sprite: null, player: null },
    { position: { x: 8, y: 4 }, piece: null, sprite: null, player: null },

    { position: { x: 1, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 2, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 3, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 4, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 5, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 6, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 7, y: 5 }, piece: null, sprite: null, player: null },
    { position: { x: 8, y: 5 }, piece: null, sprite: null, player: null },

    { position: { x: 1, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 2, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 3, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 4, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 5, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 6, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 7, y: 6 }, piece: null, sprite: null, player: null },
    { position: { x: 8, y: 6 }, piece: null, sprite: null, player: null },

    { position: { x: 1, y: 7 }, piece: "rook", sprite: rook[2], player: 2 },
    { position: { x: 2, y: 7 }, piece: "knight", sprite: knight[2], player: 2 },
    { position: { x: 3, y: 7 }, piece: "bishop", sprite: bishop[2], player: 2 },
    { position: { x: 4, y: 7 }, piece: "king", sprite: king[2], player: 2 },
    { position: { x: 5, y: 7 }, piece: "queen", sprite: queen[2], player: 2 },
    { position: { x: 6, y: 7 }, piece: "bishop", sprite: bishop[2], player: 2 },
    { position: { x: 7, y: 7 }, piece: "knight", sprite: knight[2], player: 2 },
    { position: { x: 8, y: 7 }, piece: "rook", sprite: rook[2], player: 2 },

    { position: { x: 1, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 2, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 3, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 4, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 5, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 6, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 7, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
    { position: { x: 8, y: 8 }, piece: "pawn", sprite: pawn[2], player: 2 },
  ],
  activePiece: null,
};

export const gameReducer = (state: Game, action: any) => {
  switch (action.type) {
    case "SELECT":
      return {
        ...state,
        activePiece: {
          piece: action.payload.piece,
          position: action.payload.position,
          moves: [{ x: 1, y: 1 }],
        },
      };

    default:
      return state;
  }
};
