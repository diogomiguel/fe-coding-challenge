export const SET_GAME_WINNER = 'SET_GAME_WINNER';

export function setGameWinner(player) {
  return {
    type: SET_GAME_WINNER,
    player,
  };
}
