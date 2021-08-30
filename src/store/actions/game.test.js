import * as Actions from './game';

describe('setGameWinner', () => {
  it('should create an action to set the winner of the game', () => {
    const expectedAction = {
      type: Actions.SET_GAME_WINNER,
      player: 'X',
    };
    const result = Actions.setGameWinner('X');
    expect(result).toEqual(expectedAction);
  });
});

describe('resetGame', () => {
  it('should create an action to reset the current game', () => {
    const expectedAction = {
      type: Actions.RESET_GAME,
    };
    const result = Actions.resetGame();
    expect(result).toEqual(expectedAction);
  });
});
