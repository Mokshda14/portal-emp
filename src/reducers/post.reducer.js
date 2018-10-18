export const postData = (state = {payload:[], loader: true}, action) => {
    switch (action.type) {
      case 'POST_START':
          return {...state, loader: action.loader};
      case 'POST_SUCCESS':
          state  = {...state, payload: action.payload, loader: action.loader};
          return state;
      case 'POST_END':
          return {...state, loader: action.loader};
      case 'POST_ERROR':
          return state;
      default:
        return state;
    }
  }