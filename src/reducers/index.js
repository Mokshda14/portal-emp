import { combineReducers } from 'redux';
import { fetchedData } from './fetch.reducer';
import { session } from './session.reducer';
import { team } from './team.reducer';
import { attendance } from './attendance.reducer';
export default combineReducers({
    fetchedData, session, team, attendance
})
