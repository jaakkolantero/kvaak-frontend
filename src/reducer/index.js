import { combineReducers } from "redux";
import sightings from "./sightings";
import species from "./species";
import backends from "./backends";
import markdown from "./markdown";

export default combineReducers({
  sightings,
  species,
  backends,
  markdown
});
