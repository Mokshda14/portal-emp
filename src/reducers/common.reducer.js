export const common = (state = {activeId:0}, action) => {
    switch(action.type) {
        case 'ACTIVE_ID': {
            return {...state, activeId: action.id}
        }
        default: {
            return state;
        }
    }
}
