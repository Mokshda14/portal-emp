import {sessionValidation} from './';

export const validateSession = () => {
    return dispatch => dispatch(sessionValidation(true))
}

export const invalidateSession = () => {
    return dispatch => dispatch(sessionValidation(false))
}