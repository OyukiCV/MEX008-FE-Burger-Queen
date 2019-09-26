import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import * as serviceWorker from './serviceWorker.js';
// import GeneralViewCustom from './components/generalMenu/menus/custom/GeneralViewCustom';


import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<GeneralViewCustom />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import Toolbar from './components/sidebar/toolbar/Toolbar.js';
// ReactDOM.render(<Toolbar />, document.getElementById('root'));

