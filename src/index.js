import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import { TemplateGame } from './components/templates/TemplateGame';
import { Board } from './components/board';
import { GameInfo } from './components/game-info';
import configureStore from './store';
import { theme } from './styles/theme';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TemplateGame>
          <Board />
          <GameInfo />
        </TemplateGame>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
