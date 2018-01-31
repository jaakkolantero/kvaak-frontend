import {SET_SPECIES} from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return action.species;
      break;
    default:
      return state;
  }
};
