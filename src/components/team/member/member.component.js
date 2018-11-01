import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { activeMember } from '../../../actions/index';
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Member extends Component {

    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this)
    }

    state= {
        showtxt: 0
    }

    

    componentDidMount() { 
        if(this.props.activeId === 0) {
        this.props.teamActiveMember(Number(this.props.match.params.id), true);
        }
        this.setState({
            showtxt: this.props.activeId
        })
    }
    changeState = () => {
        setTimeout(() => {
            this.setState({
                showtxt: 123,
                transitionCheck: true
            })
        },1200);
       
    }

    componentWillReceiveProps(newProps) {
        if(this.props.activeId !== newProps.activeId) {
        this.setState({
            showtxt: 0,
            transitionCheck: false
        })
    }
        
    }

    render() {
        
        if(this.props.team && this.props.team.length>0) {
        return(
            <ReactCSSTransitionGroup transitionName="anim" transitionEnter={this.state.transitionCheck} transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
>

{(this.state.showtxt !== 0) ?
            <div className="member-container">
            
            <div className="cross">
                <Link to={"/portal/team"}>&times;</Link>
                
            </div>

            <h4>Member id: {this.props.match.params.id}</h4>


            </div>: this.changeState()}
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
    teamActiveMember: (id, flag) => dispatch(activeMember(id, 'team', flag))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Member)
