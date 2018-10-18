import {postDataStart, postDataSuccess, postDataError} from './';

export const postDetails = (url, data) => {
    return dispatch => {
        dispatch(postDataStart());
        return fetch((url), {
          method: 'PUT',
          body: JSON.stringify(data),
        header: 'Content-Type: application/json, Accept: application/json'})
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(postDataSuccess(json));
            return json.products;
          })
          .catch(error => dispatch(postDataError(error)));
      };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}