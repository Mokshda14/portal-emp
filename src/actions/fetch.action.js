import {fetchDataStart, fetchDataSuccess, fetchDataError, setTeam} from './';
import {invalidateSession} from './session.action'
import {getData, getSession, setData} from '../helper/helper';

export const fetchDetails = (url, type) => {
    return dispatch => {
      let validSession = getSession();
        if(!validSession) {
          dispatch(invalidateSession());
        } else {
          dispatch(fetchDataStart());
          getData(url).then(res => {
            dispatch(setTeam(res));
            // setData(res);
            dispatch(fetchDataSuccess(res, type));
          }).catch(err => {
            dispatch(fetchDataError());
          })
        }
      }
}
