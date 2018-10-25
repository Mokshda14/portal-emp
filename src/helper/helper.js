import {validateSession, invalidateSession } from '../actions/session.action';
import {setTeam} from '../actions/team.action';
import {setAttendance} from '../actions/attendance.action';
export const gotToLogin = () => {
  window.location.replace('/login'); 
}

export const createSession = (data) => {
  localStorage.setItem('session', data);
  return dispatch => dispatch(validateSession());
}

export const getSession = () => {
  return localStorage.getItem('session');
}


export const deleteSession = () => {
  localStorage.clear('session');
  return dispatch => dispatch(invalidateSession());
}

export const getData = async(url, params) =>{
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export const setData = (data, type) => {
  switch(type){
    case 'team':
      return dispatch => dispatch(setTeam(data));
    case 'attendance':
      return dispatch => dispatch(setAttendance(data));
    default:
      return null;
  }
}

