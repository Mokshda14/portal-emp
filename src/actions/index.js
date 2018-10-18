/**   http get method   **/
export const fetchDataStart = id => ({
  type: 'FETCH_START',
  loader: true 
})

export const fetchDataSuccess = response => ({
  type: 'FETCH_SUCCESS',
  payload: response,
  loader: false
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
