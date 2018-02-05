import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from 'reducer';
import {getSightings} from 'reducer/sightings/actions';
import {getSpecies} from 'reducer/species/actions';

const configureStore = () => {
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
  ));

  store.dispatch(getSightings());
  store.dispatch(getSpecies());

  store.subscribe(() => {
    console.log("store changed", store.getState());;
  });

  return store;
}

export default configureStore;
