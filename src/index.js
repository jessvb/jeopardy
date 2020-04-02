import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';

ReactDOM.render(
  <React.StrictMode>
    <Game numCategories={5} />
  </React.StrictMode>,
  document.getElementById('root')
);
