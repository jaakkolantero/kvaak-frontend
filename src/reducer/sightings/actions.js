export const SET_SIGHTINGS = 'SET_SIGHTINGS';
export const ADD_SIGHTING = 'ADD_SIGHTING';

export function getSightings() {
  return dispatch => {
    fetch('http://localhost:8081/sightings')
      .then(response => response.json())
      .then(sightings =>
        dispatch(setSightings(sightings))
      );
  };
}

export function postSighting(sighting) {
  return dispatch => {

    fetch('http://localhost:8081/sightings', {
      method: 'POST',
      body: JSON.stringify(sighting),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => {
      let sighting = response.json();
      return sighting;
    })
    .then(sighting => {
      return dispatch(addSighting(sighting));
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success'));
  };
}

export const setSightings = sightings => ({
  type:SET_SIGHTINGS,
  sightings
});

export const addSighting = sighting => ({
  type:ADD_SIGHTING,
  sighting
});
