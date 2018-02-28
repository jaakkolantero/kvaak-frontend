import { getActiveBackend } from "reducer/backends";

export const SET_SPECIES = "SET_SPECIES";

export function getSpecies() {
  return dispatch => {
    var backend;
    try {
      backend = getActiveBackend();
    } catch (e) {
      console.log("Error loading backend: ", e);
      backend = "http://localhost:8081";
    }
    fetch(`${backend.url}/species/`)
      .then(response => response.json())
      .catch(error => {
        console.log("No respeonse from server", error);
        return null;
      })
      .then(species => dispatch(setSpecies(species)));
  };
}

export const setSpecies = species => ({
  type: SET_SPECIES,
  species
});
