import { combineReducers } from 'redux';
import { fetchedData } from './fetch.reducer';
import { session } from './session.reducer';
import { team } from './team.reducer';
import { attendance } from './attendance.reducer';
import { common} from './common.reducer'
export default combineReducers({
    fetchedData, session, team, attendance, common
})
