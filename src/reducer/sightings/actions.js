import { getActiveBackend } from "reducer/backends";

export const SET_SIGHTINGS = "SET_SIGHTINGS";
export const ADD_SIGHTING = "ADD_SIGHTING";

export function getSightings() {
  return dispatch => {
    var backend;
    try {
      backend = getActiveBackend();
    } catch (e) {
      console.log("Error loading backend: ", e);
      backend = "http://localhost:8081";
    }
    fetch(`${backend.url}/sightings/`)
      .then(response => response.json())
      .then(sightings => {
        return dispatch(setSightings(sightings));
      });
  };
}

export function postSighting(sighting) {
  return dispatch => {
    var backend;
    try {
      backend = getActiveBackend();
    } catch (e) {
      console.log("Error loading backend: ", e);
      backend = "http://localhost:8081";
    }
    fetch(`${backend.url}/sightings/`, {
      method: "POST",
      body: JSON.stringify(sighting),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        let sighting = response.json();
        return sighting;
      })
      .then(sighting => {
        return dispatch(addSighting(sighting));
      })
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success"));
  };
}

export const setSightings = sightings => ({
  type: SET_SIGHTINGS,
  sightings
});

export const addSighting = sighting => ({
  type: ADD_SIGHTING,
  sighting
});
