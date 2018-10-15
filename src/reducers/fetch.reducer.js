export const fetchedData = (state = {payload:[], loader: true}, action) => {
  switch (action.type) {
    case 'FETCH_START':
        return {...state, loader: action.loader};
    case 'FETCH_SUCCESS':
        state  = {...state, payload: action.payload, loader: action.loader};
        return state;
    case 'FETCH_END':
        return {...state, loader: action.loader};
    case 'FETCH_ERROR':
        return state;
    default:
      return state;
  }
}