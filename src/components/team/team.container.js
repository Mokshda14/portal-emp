import { getTeamDetails} from '../../actions/team.action';
import { teamActiveMember } from '../../actions/index';
import React, {Component} from 'react';
import TeamCpt from './team.component';
import {connect} from 'react-redux';
class Team extends Component {

    constructor(props) {
        super(props);
        this.rowSelected = this.rowSelected.bind(this);
    }
   
    render(){
        if(this.props.teamlist && this.props.teamlist.length) {
        return (
           <div>
                <TeamCpt teamList={this.props.teamlist} isLoading={this.props.isLoading}
                    rowSelected={this.rowSelected}
                ></TeamCpt>
           </div>
        )
    } else {
        return(<div></div>);
    }
    }

    rowSelected(indexSelected) {
        if(this.props.teamlist[indexSelected]) {
            // this.props.teamlist[indexSelected].isActive = "abc";
            this.props.teamActiveMember(this.props.teamlist[indexSelected].empId);
        }
    }

    componentDidMount() {
            this.props.getTeamDetails();
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return(
        {
        getTeamDetails: () => dispatch(getTeamDetails()),
        teamActiveMember: (id) => dispatch(teamActiveMember(id))
        }
    )
}

const mapStateToProps = (state) => {
    return({teamlist : state.team,
    isLoading: state.fetchedData.loader})
    }



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Team)

