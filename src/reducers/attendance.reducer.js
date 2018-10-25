export const attendance = (state = [], action) => {
    switch (action.type) {
      case 'ATTENDANCE':
            return [...action.attendance];
      case 'ATTENDANCE_ACTIVE_MEMBER':
            let abc = state.map(member => {
              if(member.empId === action.id) {
                return {...member, isActive: true}
              } else {
                return {...member, isActive: false}
              }
            });
            return [...abc] 
        default:
          return state;
      }
    }