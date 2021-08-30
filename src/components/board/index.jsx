import React from 'react';
import { useSelector } from 'react-redux';
import { BoardCell } from './BoardCell';
import { BoardGrid } from './BoardGrid';
import { selectBoard } from '../../store/selectors/board';
import { selectHasGameEnded } from '../../store/selectors/game';

import { BOARD_MOVES } from '../../constants/board';

export const Board = () => {
  const board = useSelector(selectBoard);
  const hasGameEnded = useSelector(selectHasGameEnded);

  return (
    <BoardGrid numCells={BOARD_MOVES}>
      {board.map((rows, rowIndex) =>
        rows.map((player, colIndex) => (
          <BoardCell
            key={`${rowIndex}${colIndex}`}
            row={rowIndex}
            col={colIndex}
            disabled={!!player || hasGameEnded}
          >
            {player}
          </BoardCell>
        )),
      )}
    </BoardGrid>
  );
};
