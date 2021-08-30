import { combineReducers } from 'redux';
import { SELECT_CELL } from '../actions/moves';
import { SET_GAME_WINNER } from '../actions/moves';
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
    default: {
      return state;
    }
  }
};

export const game = (state = { currentPlayer: 'X', winner: null }, action) => {
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
        winner: state.player,
      };
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  board,
  game,
});
