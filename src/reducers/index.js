import { combineReducers } from 'redux';
import { fetchedData } from './fetch.reducer';
import { session } from './session.reducer';
import { team } from './team.reducer';
export default combineReducers({
    fetchedData, session, team
})
