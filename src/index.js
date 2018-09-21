import React from 'react';
import ReactDOM from 'react-dom';
import './config.js'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './store'
import { Provider } from 'react-redux'

const render = () =>{
    ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'))
}
render()

registerServiceWorker();
