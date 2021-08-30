import { createBoard } from '../reducers';
import * as GameSelectors from './game';

describe('selectHasGameEnded', () => {
  it('should return true if there is a winner value', () => {
    const stateWithWinner = {
      board: createBoard(3),
      game: {
        currentPlayer: 'O',
        winner: 'X',
      },
    };

    expect(GameSelectors.selectHasGameEnded(stateWithWinner)).toBe(true);
  });

  it('should return true if there are no more possible moves', () => {
    const stateWithWinner = {
      board: Array(3)
        .fill(null)
        .map((_) => Array(3).fill('X')),
      game: {
        currentPlayer: 'O',
        winner: null,
      },
    };

    expect(GameSelectors.selectHasGameEnded(stateWithWinner)).toBe(true);
  });

  it('otherwise return false', () => {
    const stateWithWinner = {
      board: [
        ['X', null, null],
        ['O', null, null],
        [null, 'X', 'O'],
      ],
      game: {
        currentPlayer: 'x',
        winner: null,
      },
    };

    expect(GameSelectors.selectHasGameEnded(stateWithWinner)).toBe(false);
  });
});
