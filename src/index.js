import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// for store set up, thunk, chrome dev tools
import { createStore, compose, applyMiddleware } from 'redux'

// activates redux
import { Provider } from 'react-redux'

// thunk add async actionability for Redux
import thunk from 'redux-thunk'

// enables router
import { BrowserRouter as Router } from 'react-router-dom'

import { reducer } from './redux/reducer'


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
