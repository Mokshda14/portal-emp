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
