import { connect } from 'react-redux'
import { getAttendanceDetails} from '../../actions/attendance.action';
import React, {Component} from 'react';
import AttendanceCpt from './attendance.component'

class Attendance extends Component {

    
    render(){
        return (
           <div>
                <AttendanceCpt attendanceList={this.props.attendanceList} isLoading={this.props.isLoading}></AttendanceCpt>
           </div>
        )
    }

    componentDidMount() {
      this.props.getAttendanceDetails();
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return(
        {getAttendanceDetails: () => dispatch(getAttendanceDetails())}
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
    attendanceList : state.fetchedData.payload,
    isLoading: state.fetchedData.loader
    })
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Attendance)