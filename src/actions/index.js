export const fetchDataStart = id => ({
  type: 'FETCH_START' 
})

export const fetchDataSuccess = response => ({
  type: 'FETCH_SUCCESS',
  payload: response
})

export const fetchDataError = id => ({
  type: 'FETCH_ERROR'
})
