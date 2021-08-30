import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { GameInfo } from '.';
import configureStore from '../../store';
import { theme } from '../../styles/theme';

import { Provider } from 'react-redux';

let defaultStore = configureStore();

const MockWrapper = ({ store = defaultStore, children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

describe('<GameInfo />', () => {
  afterEach(() => {
    cleanup();
    // Fake reset store
    // Would use mock clear store library time permitting
    defaultStore = configureStore();
  });

  test('renders next player name', () => {
    render(<GameInfo />, { wrapper: MockWrapper });
    const nextPlayerContent = screen.getByText('X');
    expect(nextPlayerContent).toBeInTheDocument();
  });

  const storeWithWinner = configureStore({
    game: {
      currentPlayer: 'X',
      winner: 'O',
    },
  });

  test('renders winner text if a winner set in state', () => {
    render(<GameInfo />, {
      wrapper: ({ children }) => <MockWrapper store={storeWithWinner} children={children} />,
    });
    const winnerContent = screen.getByText('O won!!!');
    expect(winnerContent).toBeInTheDocument();
  });

  test('renders tie text if game ended without winners', () => {
    const storeWithTie = configureStore({
      board: [
        ['O', 'X', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
      ],
    });

    render(<GameInfo />, {
      wrapper: ({ children }) => <MockWrapper store={storeWithTie} children={children} />,
    });
    const winnerContent = screen.getByText('Tie!');
    expect(winnerContent).toBeInTheDocument();
  });

  test('clicking on reset game button resets the board', () => {
    render(<GameInfo />, {
      wrapper: ({ children }) => <MockWrapper store={storeWithWinner} children={children} />,
    });

    fireEvent.click(screen.getByText('New game'));

    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.queryByText('New game')).not.toBeInTheDocument();
    expect(screen.queryByText('won!!!')).not.toBeInTheDocument();
  });
});
