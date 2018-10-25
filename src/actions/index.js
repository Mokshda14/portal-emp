
/**   http get method   **/
export const fetchDataStart = id => ({
  type: 'FETCH_START',
  loader: true 
})

export const fetchDataSuccess = (response, list) => ({
  type: 'FETCH_SUCCESS',
  payload: response,
  loader: false,
  list
})

export const fetchDataError = id => ({
  type: 'FETCH_ERROR',
  loader: false
})
/**   http get method end   **/

/**   http post method   **/
export const postDataStart = id => ({
  type: 'POST_START',
  loader: true 
})

export const postDataSuccess = response => ({
  type: 'POST_SUCCESS',
  payload: response,
  loader: false
})

export const postDataError = id => ({
  type: 'POST_ERROR',
  loader: false
})

/**   http post method end   **/

/**   session action begin  **/

export const sessionValidation = flag => ({
  type: 'SESSION_VALIDATED',
  session_flag: flag
})

/**   session actions end  **/

export const activeMember = (id, category) => {
    switch(category) {
      case 'team': 
        return (
          {type: 'TEAM_ACTIVE_MEMBER',
          id: id}
        );
      case 'attendance': 
      return (
        {type: 'ATTENDANCE_ACTIVE_MEMBER',
        id: id}
      )
      default:  
        return null;
    }
}

