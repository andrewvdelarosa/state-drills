import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Bomb from './state-drills/Bomb'
import Roulette from './state-drills/Roulette'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
    <React.StrictMode>
    
    <Roulette />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA