import { expectSaga, testSaga } from 'redux-saga-test-plan';

import { SELECT_CELL } from '../actions/moves';

import * as GameSagas from './game';
import { setGameWinner } from '../actions/game';

describe('checkGameWinner', () => {
  const mockWinningPlayer = 'X';

  it('should call setGameWinner with a player winning by row match', () => {
    const boardRowWin = [
      ['O', mockWinningPlayer, 'O'],
      [mockWinningPlayer, mockWinningPlayer, mockWinningPlayer],
      ['O', null, null],
    ];
    return expectSaga(GameSagas.checkGameWinner, { currentPlayer: mockWinningPlayer })
      .withState({
        board: boardRowWin,
      })
      .put(setGameWinner(mockWinningPlayer))
      .returns()
      .run();
  });

  it('should call setGameWinner with a player winning by column match', () => {
    const boardColWin = [
      ['O', mockWinningPlayer, 'O'],
      ['O', mockWinningPlayer, null],
      [null, mockWinningPlayer, null],
    ];
    return expectSaga(GameSagas.checkGameWinner, { currentPlayer: mockWinningPlayer })
      .withState({
        board: boardColWin,
      })
      .put(setGameWinner(mockWinningPlayer))
      .returns()
      .run();
  });

  it('should call setGameWinner with a player winning by diagonal lhs match', () => {
    const boardDiagonalLHSWin = [
      [mockWinningPlayer, 'O', 'O'],
      ['O', mockWinningPlayer, null],
      [null, 'O', mockWinningPlayer],
    ];
    return expectSaga(GameSagas.checkGameWinner, { currentPlayer: mockWinningPlayer })
      .withState({
        board: boardDiagonalLHSWin,
      })
      .put(setGameWinner(mockWinningPlayer))
      .returns()
      .run();
  });

  it('should call setGameWinner with a player winning by diagonal rhs match', () => {
    const boardDiagonalLHSWin = [
      ['O', 'O', mockWinningPlayer],
      ['O', mockWinningPlayer, null],
      [mockWinningPlayer, 'O', null],
    ];
    return expectSaga(GameSagas.checkGameWinner, { currentPlayer: mockWinningPlayer })
      .withState({
        board: boardDiagonalLHSWin,
      })
      .put(setGameWinner(mockWinningPlayer))
      .returns()
      .run();
  });

  it('should not call setGameWinner if no winning condition met', () => {
    const boardDeadlocked = [
      ['O', mockWinningPlayer, 'O'],
      ['O', mockWinningPlayer, 'O'],
      [mockWinningPlayer, 'O', mockWinningPlayer],
    ];
    return expectSaga(GameSagas.checkGameWinner, { currentPlayer: mockWinningPlayer })
      .withState({
        board: boardDeadlocked,
      })
      .not.put(setGameWinner(mockWinningPlayer))
      .returns()
      .run();
  });
});

describe('watchEveryCheckGameWinner', () => {
  it('should watch every SELECT_CELL and call checkGameWinner', () => {
    testSaga(GameSagas.watchEveryCheckGameWinner)
      .next()
      .takeEvery(SELECT_CELL, GameSagas.checkGameWinner)
      .next()
      .isDone();
  });
});
