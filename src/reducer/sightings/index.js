import {SET_SIGHTINGS} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGHTINGS:
      return action.sightings;
      break;
    default:
      return state;
  }
};
