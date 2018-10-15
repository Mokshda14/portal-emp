import { connect } from 'react-redux'
import { getTeamDetails} from '../../actions/team.action';
import React, {Component} from 'react';
import TeamCpt from './team.component'

class Team extends Component {

    
    render(){
        return (
           <div>
                <TeamCpt teamList={this.props.teamlist} isLoading={this.props.isLoading}></TeamCpt>
           </div>
        )
    }

    componentDidMount() {
      this.props.getTeamDetails();
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return(
        {getTeamDetails: () => dispatch(getTeamDetails())}
    )
}

const mapStateToProps = (state) => ({
    teamlist : state.fetchedData.payload,
    isLoading: state.fetchedData.loader
    })



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Team)