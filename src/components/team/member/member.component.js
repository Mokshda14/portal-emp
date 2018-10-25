import React, {Component} from 'react';
import {connect} from 'react-redux';
class Member extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <h4>Member id: {this.props.match.params.id}</h4>
        )
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return(
//         {
//         getTeamDetails: () => dispatch(getTeamDetails()),
//         teamActiveMember: (id) => dispatch(activeMember(id, 'team'))
//         }
//     )
// }

const mapStateToProps = (state) => {
    return({team : state.team})
    }



export default connect(
    mapStateToProps,
   null
  )(Member)
