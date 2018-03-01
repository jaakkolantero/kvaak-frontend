import { GET_MARKDOWN } from "./actions";

const initialState = "";

const markdown = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKDOWN:
      return action.markdown;
    default:
      return state;
  }
};

export default markdown;
