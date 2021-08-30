import { createBoard, board, game } from '.';
import * as MoveActions from '../actions/moves';
import * as GameActions from '../actions/game';

import { BOARD_MOVES } from '../../constants/board';

describe('createBoard', () => {
  it('should regenerate a square 2D array of provided length', () => {
    Array(10)
      .fill()
      .forEach((_, i) => {
        const board = createBoard(i);
        expect(board).toHaveLength(i);
        board.forEach((row) => expect(row).toHaveLength(i));
      });
  });
});

describe('board', () => {
  it('should create a default board state of length 3', () => {
    const expectedState = createBoard(3);
    const result = board(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should update a co-ordinate to match the currentPlayer', () => {
    const state = createBoard(3);
    const result = board(state, MoveActions.selectCell('X', 0, 0));

    state[0][0] = 'X';

    expect(result).toEqual(state);
  });

  it('should recreate initial empty board on game reset', () => {
    const state = createBoard(BOARD_MOVES);

    let result = board(state, MoveActions.selectCell('X', 0, 0));
    result = board(state, MoveActions.selectCell('0', 2, 0));
    result = board(state, GameActions.resetGame());

    expect(result).toEqual(state);
  });
});

describe('game', () => {
  it('should create a default game state with current player and no winner', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: null,
    };
    const result = game(undefined, {});

    expect(result).toEqual(expectedState);
  });

  it('should update a co-ordinate to match the currentPlayer', () => {
    const xState = { currentPlayer: 'X', winner: null };
    const oState = { currentPlayer: 'O', winner: null };

    const xResult = game(xState, MoveActions.selectCell('X', 0, 0));
    const oResult = game(oState, MoveActions.selectCell('X', 0, 0));

    expect(xResult).toEqual(oState);
    expect(oResult).toEqual(xState);
  });

  it('should set the winner value on winner action', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: 'X',
    };

    const result = game(undefined, GameActions.setGameWinner('X'));

    expect(result).toEqual(expectedState);
  });

  it('should reset winner and currentPlayer on reset game action', () => {
    const expectedState = {
      currentPlayer: 'X',
      winner: null,
    };

    const result = game({ currentPlayer: 'O', winner: 'X' }, GameActions.resetGame());

    expect(result).toEqual(expectedState);
  });
});
