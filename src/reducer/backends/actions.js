export const ADD_BACKEND = "ADD_BACKEND";
export const SELECT_BACKEND = "SELECT_BACKEND";
export const SET_BACKEND_URL = "SET_BACKEND_URL";

export const addBackend = backend => ({
  type: ADD_BACKEND,
  ...backend
});

export const selectBackend = id => ({
  type: SELECT_BACKEND,
  id
});

export const setBackendUrl = (id, url) => ({
  type: SET_BACKEND_URL,
  id,
  url
});
