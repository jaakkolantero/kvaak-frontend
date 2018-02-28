import { SET_SIGHTINGS, ADD_SIGHTING } from "./actions";

const initialState = [];

const sightings = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGHTINGS:
      return action.sightings;
    case ADD_SIGHTING:
      return [
        ...state,
        {
          id: action.sighting.id,
          dateTime: action.sighting.dateTime,
          species: action.sighting.species,
          count: action.sighting.count,
          description: action.sighting.description
        }
      ];
    default:
      return state;
  }
};

export default sightings;
