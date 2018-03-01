import { getActiveBackend } from "reducer/backends";

export const GET_MARKDOWN = "GET_MARKDOWN";

export function fetchMarkdown() {
  return dispatch => {
    fetch(
      `//raw.githubusercontent.com/terokoodaa/kvaak-frontend/master/README.md`
    )
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
