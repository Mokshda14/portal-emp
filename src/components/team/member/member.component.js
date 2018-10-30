import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { activeMember } from '../../../actions/index';
class Member extends Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() { 
        if(this.props.activeId === 0) {
        this.props.teamActiveMember(Number(this.props.match.params.id), 'team');
        }
    }

    render() {
        
        return(
            <div className="member-container">
            <div className="cross">
                <Link to={"/portal/team"}>&times;</Link>
            </div>
            <h4>Member id: {this.props.match.params.id}</h4>
            </div>
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
    return({team : state.team,
    activeId: state.common.activeId
    })
}

const mapDispatchToProps = (dispatch) => ({
    teamActiveMember: (id) => dispatch(activeMember(id, 'team'))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Member)
