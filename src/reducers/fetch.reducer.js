export const fetchedData = (state = {payload:[]}, action) => {
  switch (action.type) {
    case 'FETCH_START':
        return state;
    case 'FETCH_SUCCESS':
        state  = {...state, payload: action.payload};
        return state;
    case 'FETCH_END':
        return state;
    case 'FETCH_ERROR':
        return state;
    default:
      return state;
  }
}