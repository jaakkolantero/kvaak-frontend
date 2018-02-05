import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import App from 'layouts/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import configureStore from 'configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

//registerServiceWorker();
