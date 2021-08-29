import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../store/actions/moves';
import { BoardCell } from './BoardCell';
import { BoardGrid } from './BoardGrid';

const selectBoard = (state) => state.board;
const selectGame = (state) => state.game;

export const Board = () => {
  const board = useSelector(selectBoard);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();
  const handleOnCellClick = (row, cell) => {
    dispatch(selectCell(game.currentPlayer, row, cell));
  };

  return (
    <BoardGrid>
      {board.map((rows, rowKey) =>
        rows.map((player, colKey) => (
          <BoardCell key={`${rowKey}${colKey}`} onClick={() => handleOnCellClick(rowKey, colKey)}>
            {player}
          </BoardCell>
        )),
      )}
    </BoardGrid>
  );
};
