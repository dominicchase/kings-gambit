import { useState } from "react";
import "./Board.css";

import pawn from "./assets/images/pawn.png";
import pawnAlt from "./assets/images/pawn1.png";

import rook from "./assets/images/rook.png";
import rookAlt from "./assets/images/rook1.png";

import knight from "./assets/images/knight.png";
import knightAlt from "./assets/images/knight1.png";

import bishop from "./assets/images/bishop.png";
import bishopAlt from "./assets/images/bishop1.png";

import queen from "./assets/images/queen.png";
import queenAlt from "./assets/images/queen1.png";

import king from "./assets/images/king.png";
import kingAlt from "./assets/images/king1.png";

type Position = {
  x: number;
  y: number;
  piece: string;
  sprite?: string;
};

export const Board = () => {
  const [positions, setPositions] = useState([
    // #region row 1
    { x: 1, y: 1, piece: "whiteRook", sprite: rook },
    { x: 2, y: 1, piece: "whiteKnight", sprite: knight },
    { x: 3, y: 1, piece: "whiteBishop", sprite: bishop },
    { x: 4, y: 1, piece: "whiteQueen", sprite: queen },
    { x: 5, y: 1, piece: "whiteKing", sprite: king },
    { x: 6, y: 1, piece: "whiteBishop", sprite: bishop },
    { x: 7, y: 1, piece: "whiteKnight", sprite: knight },
    { x: 8, y: 1, piece: "whiteRook", sprite: rook },
    // #endregion
    // #region row 2
    { x: 1, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 2, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 3, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 4, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 5, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 6, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 7, y: 2, piece: "whitePawn", sprite: pawn },
    { x: 8, y: 2, piece: "whitePawn", sprite: pawn },
    // #region row 3
    { x: 1, y: 3, piece: null, sprite: null },
    { x: 2, y: 3, piece: null, sprite: null },
    { x: 3, y: 3, piece: null, sprite: null },
    { x: 4, y: 3, piece: null, sprite: null },
    { x: 5, y: 3, piece: null, sprite: null },
    { x: 6, y: 3, piece: null, sprite: null },
    { x: 7, y: 3, piece: null, sprite: null },
    { x: 8, y: 3, piece: null, sprite: null },
    // #endregion
    // #region row 4
    { x: 1, y: 4, piece: null, sprite: null },
    { x: 2, y: 4, piece: null, sprite: null },
    { x: 3, y: 4, piece: null, sprite: null },
    { x: 4, y: 4, piece: null, sprite: null },
    { x: 5, y: 4, piece: null, sprite: null },
    { x: 6, y: 4, piece: null, sprite: null },
    { x: 7, y: 4, piece: null, sprite: null },
    { x: 8, y: 4, piece: null, sprite: null },
    // #endregion
    // #region row 5
    { x: 1, y: 5, piece: null, sprite: null },
    { x: 2, y: 5, piece: null, sprite: null },
    { x: 3, y: 5, piece: null, sprite: null },
    { x: 4, y: 5, piece: null, sprite: null },
    { x: 5, y: 5, piece: null, sprite: null },
    { x: 6, y: 5, piece: null, sprite: null },
    { x: 7, y: 5, piece: null, sprite: null },
    { x: 8, y: 5, piece: null, sprite: null },
    // #endregion
    // #region row 6
    { x: 1, y: 6, piece: null, sprite: null },
    { x: 2, y: 6, piece: null, sprite: null },
    { x: 3, y: 6, piece: null, sprite: null },
    { x: 4, y: 6, piece: null, sprite: null },
    { x: 5, y: 6, piece: null, sprite: null },
    { x: 6, y: 6, piece: null, sprite: null },
    { x: 7, y: 6, piece: null, sprite: null },
    { x: 8, y: 6, piece: null, sprite: null },
    // #endregion
    // #region row 7
    { x: 1, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 2, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 3, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 4, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 5, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 6, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 7, y: 7, piece: "blackPawn", sprite: pawnAlt },
    { x: 8, y: 7, piece: "blackPawn", sprite: pawnAlt },
    // #endregion
    // #region row 8
    { x: 1, y: 8, piece: "blackRook", sprite: rookAlt },
    { x: 2, y: 8, piece: "blackKnight", sprite: knightAlt },
    { x: 3, y: 8, piece: "blackBishop", sprite: bishopAlt },
    { x: 4, y: 8, piece: "blackQueen", sprite: queenAlt },
    { x: 5, y: 8, piece: "blackKing", sprite: kingAlt },
    { x: 6, y: 8, piece: "blackBishop", sprite: bishopAlt },
    { x: 7, y: 8, piece: "blackKnight", sprite: knightAlt },
    { x: 8, y: 8, piece: "blackRook", sprite: rookAlt },
    // #endregion
  ]);

  const [activePiece, setActivePiece] = useState<Position>({
    x: -1,
    y: -1,
    piece: "",
  });

  const getPiece = (x: number, y: number) => {
    const position = positions.find(
      (position) => position.x === x && position.y === y
    );

    if (position?.piece !== null) {
      return <img src={position?.sprite} />;
    } else {
      return;
    }
  };

  const handleClick = (x: number, y: number) => {
    console.log(`clicked ${x}, ${y}`);
    const position = positions.find(
      (position) => position.x === x && position.y === y
    );
    if (position?.piece !== null) {
      setActivePiece({
        x,
        y,
        piece: position?.piece || "",
      });
      console.log(position?.piece);
    } else {
      console.log("No piece found");
    }
  };

  return (
    <table>
      <tbody>
        {[...Array(8)].map((_y, y) => (
          <tr key={`$row-${y + 1}`}>
            {[...Array(8)].map((_x, x) => (
              <td
                className={`${
                  activePiece.x === x + 1 &&
                  activePiece.y === y + 1 &&
                  "bg-danger"
                }`}
                key={`cell-${x + 1}-${y + 1}`}
                onClick={() => handleClick(x + 1, y + 1)}
              >
                {getPiece(x + 1, y + 1)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
