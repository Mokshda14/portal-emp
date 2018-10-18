import {postDetails} from './post.action';
import {fetchDetails} from './fetch.action';
import {CREATE_ACC} from '../rest-url.const';
import {LOGIN_ACC} from '../rest-url.const';
export const createAcc = (user) => {
        return dispatch => {
            dispatch(postDetails(CREATE_ACC, user));
        };   

}
export const loginAcc = (user) => {
    return dispatch => {
        dispatch(fetchDetails(LOGIN_ACC, user));
      };   
}
