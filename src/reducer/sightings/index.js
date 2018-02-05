import {SET_SIGHTINGS, ADD_SIGHTING} from './actions';

const initialState = [];

const sightings = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGHTINGS:
      return action.sightings;
      break;
    case ADD_SIGHTING:
      console.log("action");
      return [
        ...state,
        {
          dateTime: action.dateTime,
          species: action.species,
          count: action.count,
          description: action.description
        }
      ]
      break;
    default:
      return state;
  }
}

export default sightings;
