import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectCell } from '../../store/actions/moves';
import { selectGameCurrentPlayer } from '../../store/selectors/game';

const BoardCellButton = styled.button`
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.25s ease;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.board[0]};
  border: 0;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryAccent};
    color: ${({ theme }) => theme.colors.secondaryAccent};
  }

  ${({ theme }) => theme.media.breakpoints.s} {
    font-size: ${({ theme }) => theme.typography.board[1]};
  }
`;

export const BoardCell = ({ row, col, disabled, children }) => {
  const currentPlayer = useSelector(selectGameCurrentPlayer);
  const dispatch = useDispatch();

  const handleOnCellClick = () => {
    console.log('vai', disabled);
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
