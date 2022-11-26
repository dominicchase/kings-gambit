import { useReducer } from "react";
import "./Board.css";

import { INITIAL_STATE, gameReducer } from "./gameReducer";

export const Board = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const handleClick = (x: number, y: number) => {
    const selection = state.board.find(
      (piece) => piece.position.x === x && piece.position.y === y
    );
    dispatch({
      type: "SELECT",
      payload: { piece: selection?.piece, position: selection?.position },
    });
  };

  return (
    <table>
      <tbody>
        {[...Array(8)].map((_y, y) => (
          <tr key={`$row-${y + 1}`}>
            {[...Array(8)].map((_x, x) => (
              <td
                key={`cell-${x + 1}-${y + 1}`}
                onClick={() => handleClick(x + 1, y + 1)}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
