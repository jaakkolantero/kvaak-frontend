import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.min.css";
import App from "layouts/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "reducer";
import { getSightings } from "reducer/sightings/actions";
import { getSpecies } from "reducer/species/actions";
import { addBackend } from "reducer/backends/actions";
import { v4 } from "uuid";
import debounce from "lodash.debounce";
import throttle from "lodash.throttle";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

export const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

if (!persistedState) {
  store.dispatch(
    addBackend({
      id: v4(),
      name: "kvaak-backend",
      url: "http://localhost:8000",
      checked: false,
      disabled: false,
      customized: false
    })
  );
  store.dispatch(
    addBackend({
      id: v4(),
      name: "vincit-summer2018",
      url: "http://localhost:8081",
      checked: true,
      disabled: false,
      customized: false
    })
  );
  store.dispatch(
    addBackend({
      id: v4(),
      name: "mockaroo",
      url: "http://localhost:8081",
      checked: false,
      disabled: true,
      customized: false
    })
  );
  store.dispatch(
    addBackend({
      id: v4(),
      name: "custom",
      url: "http://localhost:8081",
      checked: false,
      disabled: false,
      customized: true
    })
  );
}

let currentBackends = [];
const updateBackend = () => {
  let previousBackends = currentBackends;
  currentBackends = store.getState().backends;

  let currentChecked = currentBackends.findIndex(
    backend => backend.checked === true
  );
  let previousChecked = previousBackends.findIndex(
    backend => backend.checked === true
  );

  if (currentChecked !== previousChecked) {
    store.dispatch(getSightings());
    store.dispatch(getSpecies());
  }
};

store.subscribe(
  throttle(() => {
    saveState({
      backends: store.getState().backends
    });
  }, 1000)
);

store.subscribe(
  debounce(() => {
    try {
      updateBackend();
    } catch (error) {
      console.log("index.js-updateBackend", error);
    }
  }, 5000)
);

store.dispatch(getSightings());
store.dispatch(getSpecies());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
