import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import App from 'layouts/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'reducer';
import {getSightings} from 'reducer/sightings/actions';
import {getSpecies} from 'reducer/species/actions';


const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));

store.dispatch(getSightings());
store.dispatch(getSpecies());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'));

//registerServiceWorker();
