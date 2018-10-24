export const team = (state = [], action) => {
  switch (action.type) {
    case 'TEAM':
    console.log("team.reducer")
          return [...action.team];
    case 'ACTIVE_MEMBER':
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