import { getAttendanceDetails} from '../../actions/attendance.action';
import { activeMember } from '../../actions/index';
import React, {Component} from 'react';
import AttendanceCpt from './attendance.component'
import {connect} from 'react-redux';
class Attendance extends Component {

    constructor(props) {
        super(props);
        this.rowSelected = this.rowSelected.bind(this);
    }
    
    render(){
        return (
           <div>
                <AttendanceCpt attendanceList={this.props.attendanceList} isLoading={this.props.isLoading}
                rowSelected={this.rowSelected} />
           </div>
        )
    }

    rowSelected(indexSelected) {
        if(this.props.attendanceList[indexSelected]) {
            this.props.teamActiveMember(this.props.attendanceList[indexSelected].empId);
        }
    }

    componentDidMount() {
      this.props.getAttendanceDetails();
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return(
        {getAttendanceDetails: () => dispatch(getAttendanceDetails()),
            teamActiveMember: (id) => dispatch(activeMember(id, 'attendance'))}
    )
}

const mapStateToProps = (state) => {
    return ({
    attendanceList : state.attendance,
    isLoading: state.fetchedData.loader
    })
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Attendance)