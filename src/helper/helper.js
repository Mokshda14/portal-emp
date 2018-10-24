import {validateSession, invalidateSession } from '../actions/session.action';
import {setTeam} from '../actions/';
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

export const setData = (data) => {
  return dispatch => dispatch(setTeam(data));
}

