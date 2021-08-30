import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { Board } from '.';
import configureStore from '../../store';
import { theme } from '../../styles/theme';

import { Provider } from 'react-redux';
import { BOARD_MOVES } from '../../constants/board';

let defaultStore = configureStore();

const MockWrapper = ({ store = defaultStore, children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

describe('<Board />', () => {
  afterEach(() => {
    cleanup();
    // Fake reset store
    // Would use mock clear store library time permitting
    defaultStore = configureStore();
  });

  test('renders correct number of Board cells', () => {
    render(<Board />, { wrapper: MockWrapper });
    const boardCells = screen.getAllByRole('button');
    expect(boardCells).toHaveLength(BOARD_MOVES * BOARD_MOVES);
  });

  test('on cell click set its textContent as current player value', () => {
    render(<Board />, { wrapper: MockWrapper });
    const boardCells = screen.getAllByRole('button');

    fireEvent.click(boardCells[0]);

    expect(boardCells[0].textContent).toBe('X');
  });

  test('on cell click update the selected cell value on state and change current player', () => {
    render(<Board />, { wrapper: MockWrapper });
    const boardCells = screen.getAllByRole('button');

    fireEvent.click(boardCells[0]);

    expect(defaultStore.getState().board[0]).toEqual(['X', null, null]);
    expect(defaultStore.getState().game.currentPlayer).toBe('O');
  });

  test('clicking on a selected cell again should not change its textContent or state value', () => {
    render(<Board />, { wrapper: MockWrapper });
    const boardCells = screen.getAllByRole('button');

    fireEvent.click(boardCells[0]);
    fireEvent.click(boardCells[0]);

    expect(boardCells[0].textContent).toBe('X');
    expect(defaultStore.getState().board[0][0]).toBe('X');
  });
});
