import {fetchDetails} from './fetch.action';
import {ATTENDANCE_LIST} from '../rest-url.const';
export const getAttendanceDetails = () => {
    return dispatch => {
        dispatch(fetchDetails(ATTENDANCE_LIST, 'attendance'));
      };   
}
