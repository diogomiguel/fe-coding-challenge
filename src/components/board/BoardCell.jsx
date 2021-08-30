import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectCell } from '../../store/actions/moves';
import { selectGameCurrentPlayer } from '../../store/selectors/game';

import { BoardCellButton } from './BoardCellButton';

export const BoardCell = ({ row, col, disabled, children }) => {
  const currentPlayer = useSelector(selectGameCurrentPlayer);
  const dispatch = useDispatch();

  const handleOnCellClick = () => {
    // We already have a player for this
    if (disabled) {
      return;
    }

    dispatch(selectCell(currentPlayer, row, col));
  };

  return (
    <BoardCellButton type="button" onClick={handleOnCellClick} disabled={disabled}>
      {children}
    </BoardCellButton>
  );
};

BoardCell.propTypes = {
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  children: PropTypes.node,
};
