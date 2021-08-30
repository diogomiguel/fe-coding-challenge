import { combineReducers } from 'redux';
import { SELECT_CELL } from '../actions/moves';
import { RESET_GAME, SET_GAME_WINNER } from '../actions/game';
import { BOARD_MOVES } from '../../constants/board';

export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map((_) => Array(i).fill(null));

export const board = (state = createBoard(BOARD_MOVES), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state));
      newBoard[action.row][action.col] = action.currentPlayer;
      return newBoard;
    }
    case RESET_GAME:
      return createBoard(BOARD_MOVES);
    default: {
      return state;
    }
  }
};

const DEFAULT_GAME_STATE = { currentPlayer: 'X', winner: null };

export const game = (state = DEFAULT_GAME_STATE, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }
    case SET_GAME_WINNER: {
      return {
        ...state,
        winner: action.player,
      };
    }
    case RESET_GAME:
      return DEFAULT_GAME_STATE;
    default: {
      return state;
    }
  }
};

export default combineReducers({
  board,
  game,
});
