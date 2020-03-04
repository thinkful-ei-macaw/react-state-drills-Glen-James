import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouletteGun />, document.getElementById('root'));


serviceWorker.unregister();
