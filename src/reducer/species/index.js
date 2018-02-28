import { SET_SPECIES } from "./actions";

const initialState = [];

const species = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIES:
      return action.species;
    default:
      return state;
  }
};

export default species;
