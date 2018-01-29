import {API_URL} from 'constants';

export const SET_SIGHTINGS = 'SET_SIGHTINGS';

export function getSightings() {
  return dispatch => {
    console.log('${API_URL}/sightings');
    fetch('http://localhost:8081/sightings')
      .then(response => response.json())
      .then(sightings =>
        dispatch(setSightings(sightings))
      );
  };
}

export function setSightings(sightings) {
  return {
    type:SET_SIGHTINGS,
    sightings
  }
}
