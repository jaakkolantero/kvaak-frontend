export const SET_SPECIES = 'SET_SPECIES';

export function getSpecies() {
  return dispatch => {
    fetch('http://localhost:8081/species')
      .then(response => response.json())
      .then(species =>
        dispatch(setSpecies(species))
      );
  };
}

export const setSpecies = species => ({
  type:SET_SPECIES,
  species
});
