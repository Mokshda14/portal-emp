import React from 'react';

const list = (props) => {
    let elem = [];
    if(props.isLoading) {
        elem.push(<tr key="234"><td colSpan="5" className="loader"/></tr>)
    } else {
        if(props.teamList) {
            props.teamList.map((emp, index) => {
                elem.push (
                    // 
                    
                    <tr className="row" key={index}>
                        <td className="col">{emp.empId}</td>
                        <td className="col">{emp.empName}</td>
                        <td className="col">{emp.department}</td>
                        <td className="col">{emp.experience}</td>
                        <td className="col">{emp.isPermanent? 'Yes' : 'No'}</td>
                    </tr>
                )
                return true;
            })
        } else {
            elem.push( <tr key="123"><td colSpan="5" className="">No Data Found</td></tr>)
        }
    }
    return elem;
}

const TeamCpt = (props)=>{
    return(
        <div className="team-container">
            <h4>List Of your team</h4>
            <table>
                <tbody>
                <tr className="row">
                    <td className="col header">Id</td>
                    <td className="col header">Name</td>
                    <td className="col header">Department</td>
                    <td className="col header">Experience</td>
                    <td className="col header">Is permanent?</td>
                    
                </tr>
                    {list(props)}
                </tbody>
            </table>
        </div>
    );
 }
export default TeamCpt;