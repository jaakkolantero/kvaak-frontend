import { combineReducers } from 'redux';
import sightings from './sightings';
import species from './species';

export default combineReducers({
  sightings,
  species
});
