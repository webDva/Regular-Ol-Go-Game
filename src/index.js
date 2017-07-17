import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import Board from './logic/board'
import Display from './Grid';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Display />, document.getElementById('root'));
registerServiceWorker();

//// Testing the Board class for its 2D array. It seems to work as intended.
//let aBoard = new Board();