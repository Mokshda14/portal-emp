export const session = (state = { session_flag: false}, action) => {
    switch (action.type) {
      case 'SESSION_VALIDATED':
          return Object.assign({}, state, {session_flag: action.session_flag});
      default:
        return state;
    }
  }