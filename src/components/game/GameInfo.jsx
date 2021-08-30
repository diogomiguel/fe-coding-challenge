import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectGameCurrentPlayer,
  selectGameWinner,
  selectHasGameEnded,
} from '../../store/selectors/game';

import { GameInfoText, GameInfoTextWinner } from './GameInfoText';
import { GameInfoButtonResetGame } from './GameInfoButtonResetGame';

export const GameInfo = () => {
  const nextPlayer = useSelector(selectGameCurrentPlayer);
  const winner = useSelector(selectGameWinner);
  const hasGameEnded = useSelector(selectHasGameEnded);

  if (winner) {
    return (
      <>
        <GameInfoText>
          <GameInfoTextWinner>
            {winner} won!!!{' '}
            <span role="img" aria-label="winner">
              &#10024;
            </span>
          </GameInfoTextWinner>
        </GameInfoText>
        <GameInfoButtonResetGame>New game</GameInfoButtonResetGame>
      </>
    );
  }

  if (hasGameEnded) {
    return (
      <>
        <GameInfoText>
          <strong>Tie!</strong>
        </GameInfoText>
        <GameInfoButtonResetGame>New game</GameInfoButtonResetGame>
      </>
    );
  }

  return (
    <GameInfoText>
      Next player: <strong>{nextPlayer}</strong>
    </GameInfoText>
  );
};
