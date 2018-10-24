export const fetchedData = (state = {payload:[], loader: true}, action) => {
  switch (action.type) {
    case 'FETCH_START':
        return {...state, loader: action.loader};
    case 'FETCH_SUCCESS':
    let data = {};
    data[action.list] = action.payload;
        state  = {...state, payload: data, loader: action.loader, list:action.list};
        return state;
    case 'FETCH_END':
        return {...state, loader: action.loader};
    case 'FETCH_ERROR':
        return state;
    default:
      return state;
  }
}