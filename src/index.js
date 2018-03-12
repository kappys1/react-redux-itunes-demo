import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ItunesApp from './components/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore();

//for debug directly in browser
window.store = store;
console.log("%c iTunes Preview ", "color: blue; font-style: italic; font-size: 30px");
console.log("%c Alex Marcos https://github.com/kappys1/", "color: blue; font-style: italic; font-size: 14px");

ReactDOM.render(<Provider store ={ store }><ItunesApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
