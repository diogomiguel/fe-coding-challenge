import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { resetGame } from '../../store/actions/game';
import { ButtonPrimary } from '../ui/buttons/ButtonPrimary';

export const GameInfoButtonResetGame = ({ children }) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(resetGame());
  };
  return (
    <ButtonPrimary type="button" onClick={handleOnClick}>
      {children}
    </ButtonPrimary>
  );
};
GameInfoButtonResetGame.propTypes = {
  children: PropTypes.node.isRequired,
};
