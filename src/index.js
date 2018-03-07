import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItunesApp from './components/index';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore();

//for debug directly in browser
window.store = store;

ReactDOM.render(<Provider store ={ store }><ItunesApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
