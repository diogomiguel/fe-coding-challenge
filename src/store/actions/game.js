export const SET_GAME_WINNER = 'SET_GAME_WINNER';
export const RESET_GAME = 'RESET_GAME';

export function setGameWinner(player) {
  return {
    type: SET_GAME_WINNER,
    player,
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
