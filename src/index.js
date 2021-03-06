import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import {createStore, compose, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'

// import rootReducer from './store/reducers/rootReducer'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



// store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const app = (
    // <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </Provider>
) 
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
