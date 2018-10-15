import {fetchDetails} from './fetch.action';
import {TEAM_LIST} from '../rest-url.const';
export const getTeamDetails = () => {
    return dispatch => {
        dispatch(fetchDetails(TEAM_LIST));
      };
}
