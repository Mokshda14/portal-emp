import React from 'react';

const list = (props) => {
    let elem = [];
    if(props.isLoading) {
        elem.push(<tr><td colSpan="5" className="loader"/></tr>)
    } else {
        console.log(props.attendanceList);
        if(props.attendanceList) {
            props.attendanceList.map((emp, index) => {
                elem.push (
                    // 
                    
                    <tr className="row" key={index}>
                        <td className="col">{emp.empId}</td>
                        <td className="col">{emp.empName}</td>
                        <td className="col">{emp.workingDays}</td>
                        <td className="col">{emp.casualLeaves}</td>
                        <td className="col">{emp.sickLeaves}</td>
                    </tr>
                )
                return true;
            })
        } else {
            elem.push( <tr key="1245"><td colSpan="5" className="">No Data Found</td></tr>)
        }
    }
    return elem;
}

const AttendanceCpt = (props)=>{
    return(
        <div className="team-container">
            <h4>Attendance Of your team</h4>
            <table>
                <tbody>
                <tr className="row">
                    <td className="col header">Id</td>
                    <td className="col header">Name</td>
                    <td className="col header">Working Days</td>
                    <td className="col header">Casual Leaves</td>
                    <td className="col header">Sick Leaves</td>
                    
                </tr>
                    {list(props)}
                    </tbody>
            </table>
        </div>
    );
 }
export default AttendanceCpt;