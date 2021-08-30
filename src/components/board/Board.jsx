import React from 'react';
import { useSelector } from 'react-redux';
import { BoardCell } from './BoardCell';
import { BoardGrid } from './BoardGrid';
import { selectBoard } from '../../store/selectors/board';

export const Board = () => {
  const board = useSelector(selectBoard);

  return (
    <BoardGrid>
      {board.map((rows, rowIndex) =>
        rows.map((player, colIndex) => (
          <BoardCell
            key={`${rowIndex}${colIndex}`}
            row={rowIndex}
            col={colIndex}
            disabled={!!player}
          >
            {player}
          </BoardCell>
        )),
      )}
    </BoardGrid>
  );
};
