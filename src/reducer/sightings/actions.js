export const SET_SIGHTINGS = 'SET_SIGHTINGS';

export function getSightings() {
  return dispatch => {
    fetch('http://localhost:8081/sightings')
      .then(response => response.json())
      .then(sightings =>
        dispatch(setSightings(sightings))
      );
  };
}

export const setSightings = sightings => ({
  type:SET_SIGHTINGS,
  sightings
});
