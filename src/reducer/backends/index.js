import { store } from "index";
import { ADD_BACKEND, SELECT_BACKEND, SET_BACKEND_URL } from "./actions";

const backend = (state = {}, action) => {
  switch (action.type) {
    case ADD_BACKEND:
      return {
        id: action.id,
        name: action.name,
        url: action.url,
        checked: action.checked || false,
        disabled: action.disabled || false,
        customized: action.customized || false
      };
    case SELECT_BACKEND:
      if (state.id === action.id) {
        return {
          ...state,
          checked: true
        };
      } else {
        return {
          ...state,
          checked: false
        };
      }
    case SET_BACKEND_URL:
      if (state.id === action.id) {
        return {
          ...state,
          url: action.url
        };
      }
      return state;
    default:
      return state;
  }
};

const backends = (state = [], action) => {
  switch (action.type) {
    case ADD_BACKEND:
      return [...state, backend(undefined, action)];
    case SELECT_BACKEND:
      return state.map(b => backend(b, action));
    case SET_BACKEND_URL:
      return state.map(b => backend(b, action));
    default:
      return state;
  }
};

export const getActiveBackend = () => {
  try {
    let currentBackends = store.getState().backends;
    return currentBackends.filter(b => b.checked)[0];
  } catch (error) {
    console.log("ERROR GETTING BACKEND URL", error);
    return undefined;
  }
};

export default backends;
