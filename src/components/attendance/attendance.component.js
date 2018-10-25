import React from 'react';

const getDetails = (isActive) => {
    if(isActive) {
        return <td>getDetails</td>
    } else {
        return null;
    }
}

const list = (props) => {
    let elem = [];
    if(props.isLoading) {
        elem.push(<tr key={"123"}><td colSpan="5" className="loader"/></tr>)
    } else {
        if(props.attendanceList) {
            props.attendanceList.map((emp, index) => {
                elem.push (
                    // 
                    
                    <tr className={`row ${emp.isActive ? "active" : ""}`} key={index}
                    onClick={() => props.rowSelected(index)}>
                        <td className="col">{emp.empId}</td>
                        <td className="col">{emp.empName}</td>
                        <td className="col">{emp.workingDays}</td>
                        <td className="col">{emp.casualLeaves}</td>
                        <td className="col">{emp.sickLeaves}</td>
                        <td className={`${emp.isActive ? "" : "hidden"}`}>
                            <div className="message-container"><div className="arrow"/><div className="info">View profile</div></div>
                        </td>
                        
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