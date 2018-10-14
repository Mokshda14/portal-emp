import {fetchDataStart, fetchDataSuccess, fetchDataError} from './';
export const getTeamDetails = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        return fetch("https://portal-emp.firebaseio.com/team.json")
          .then(handleErrors)
          .then(res => res.json())
          .then(json => {
            dispatch(fetchDataSuccess(json));
            return json.products;
          })
          .catch(error => dispatch(fetchDataError(error)));
      };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}