import { takeEvery, select } from 'redux-saga/effects';

import { SELECT_CELL } from '../actions/moves';
import { setGameWinner } from '../actions/game';
import { selectBoard } from '../selectors/board';
import { BOARD_MOVES } from '../../constants/board';

export function* checkGameWinner({ currentPlayer }) {
  const diagonalScore = [0, 0];

  const board = yield select(selectBoard);

  console.log('currentPlayer', currentPlayer);

  // Some so we can terminate early if a winner is found before EOL
  const isPlayerWinner = board.some((row, i) => {
    // 1. All rows the same
    const rowWin = row.every((val) => val === currentPlayer);

    if (rowWin) {
      return true;
    }

    // 2. All cols the same
    const colWin = board.every((row) => row[i] === currentPlayer);

    if (colWin) {
      return true;
    }

    // 3. All LHS started diagonals the same
    if (row[i]) {
      diagonalScore[0] += 1;
    }

    // 4. All RHS started diagonals the same
    if (row[BOARD_MOVES - 1 - i]) {
      diagonalScore[1] += 1;
    }

    return diagonalScore[0] === BOARD_MOVES || diagonalScore[1] === BOARD_MOVES;
  });

  if (isPlayerWinner) {
    console.log('winner', currentPlayer);
    setGameWinner(currentPlayer);
  }
}

export function* watchEveryCheckGameWinner() {
  yield takeEvery(SELECT_CELL, checkGameWinner);
}
