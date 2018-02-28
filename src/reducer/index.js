import { combineReducers } from "redux";
import sightings from "./sightings";
import species from "./species";
import backends from "./backends";

export default combineReducers({
  sightings,
  species,
  backends
});
