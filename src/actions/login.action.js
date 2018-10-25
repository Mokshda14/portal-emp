import {postDetails} from './post.action';
// import {fetchDetails} from './fetch.action';
import {CREATE_ACC} from '../rest-url.const';
import {LOGIN_ACC} from '../rest-url.const';
import {fetchDataStart, fetchDataSuccess, fetchDataError} from './';
import { validateSession, invalidateSession } from './session.action';
import {getData, createSession} from '../helper/helper';


export const createAcc = (user) => {
        return dispatch => {
            dispatch(postDetails(CREATE_ACC, user));
        };   

}
export const loginAcc = (user) => {
    return dispatch => {
        dispatch(fetchDataStart());
        getData(LOGIN_ACC).then(res => {
          createSession(res)
          dispatch(fetchDataSuccess(res, 'login'));
          dispatch(validateSession());
        }).catch(err => {
          alert(err);
          dispatch(fetchDataError());
          dispatch(invalidateSession());
        })
      };   
}
