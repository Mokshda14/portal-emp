import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { activeMember } from '../../../actions/index';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        if(this.props.team && this.props.team.length>0) {
        return(
            
            <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}
      transitionAppearTimeout={500}
>
            <div className="member-container">
            <div className="cross">
                <Link to={"/portal/team"}>&times;</Link>
            </div>

            <ReactCSSTransitionGroup transitionName="content-anim" transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={true}
      transitionLeave={true}
      transitionEnterTimeout={2000}
      transitionLeaveTimeout={2000}>
            <h4>Member id: {this.props.match.params.id}</h4>

            </ReactCSSTransitionGroup>
            </div>
            </ReactCSSTransitionGroup>
        )} else {
            return <div />
        }
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
