import { getActiveBackend } from "reducer/backends";

export const GET_MARKDOWN = "GET_MARKDOWN";

export function fetchMarkdown(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(markdown => {
        return dispatch(getMarkdown(markdown));
      });
  };
}

export const getMarkdown = markdown => ({
  type: GET_MARKDOWN,
  markdown
});
