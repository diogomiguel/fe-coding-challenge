export const selectGame = (state) => state.game;
export const selectGameCurrentPlayer = (state) => state.game.currentPlayer;
export const selectGameWinner = (state) => state.game.winner;
// Game is over when we have a winner or no cells empty
export const selectHasGameEnded = (state) =>
  !!state.game.winner || state.board.flatMap((x) => x).every((val) => !!val);
