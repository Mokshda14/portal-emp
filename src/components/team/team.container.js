import { getTeamDetails} from '../../actions/team.action';
import { activeMember } from '../../actions/index';
import React, {Component} from 'react';
import TeamCpt from './team.component';
import {connect} from 'react-redux';

// import {Route, Link} from 'react-router-dom';
class Team extends Component {

    constructor(props) {
        super(props);
        this.rowSelected = this.rowSelected.bind(this);
        this.selectedRow = React.createRef();
    }
   
    render(){
        if(this.props.teamlist && this.props.teamlist.length) {
        return (
           <div className={`${this.props.location.pathname.includes('team/id')?'with-member':''}`}>
                <TeamCpt teamList={this.props.teamlist} isLoading={this.props.isLoading}
                    rowSelected={this.rowSelected} activeId={this.props.activeId} selectedRow={this.selectedRow}
                ></TeamCpt>


                 
           </div>

           
        )
    } else {
        return(<div></div>);
    }
    }

    rowSelected(indexSelected, flag) {
        if(this.props.teamlist[indexSelected]) {
            this.props.teamActiveMember(this.props.teamlist[indexSelected].empId, flag);
        }
        // ReactDOM.findDOMNode(this.refs[this.props.teamlist[indexSelected].empId]).focus();
        // document.getElementById(this.props.teamlist[indexSelected].empId).focus({preventScroll:false});
        
    }

    componentDidMount() {
        if(this.props.teamlist && this.props.teamlist.length===0)
            this.props.getTeamDetails();
            if(this.props.activeId && this.props.activeId !== 0) {
                // ReactDOM.findDOMNode(this.refs[this.props.activeId]).focus();
               
            }
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return(
        {
        getTeamDetails: () => dispatch(getTeamDetails()),
        teamActiveMember: (id, flag) => dispatch(activeMember(id, 'team', flag))
        }
    )
}

const mapStateToProps = (state) => {
    return({teamlist : state.team,
    isLoading: state.fetchedData.loader,
    activeId: state.common.activeId})
    }



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Team)

