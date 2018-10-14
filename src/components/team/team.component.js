import React from 'react';

const list = (props) => {
    let elem = [];
    if(props.teamList && props.teamList.empList) {
        props.teamList.empList.map(emp => {
            elem.push (
                // 
                
                <tr class="row">
                    <td class="col">{emp.empId}</td>
                    <td class="col">{emp.empName}</td>
                    <td class="col">{emp.department}</td>
                    <td class="col">{emp.experience}</td>
                    <td class="col">{emp.isPermanent? 'Yes' : 'No'}</td>
                </tr>
            )
        })
    } else {
        elem.push( <div>No Data Found</div>)
    }

    return elem;
}

const TeamCpt = (props)=>{
    return(
        <div className="team-container">
            <h4>List Of your team</h4>
            <table>
                <tr class="row">
                    <td class="col header">Id</td>
                    <td class="col header">Name</td>
                    <td class="col header">Department</td>
                    <td class="col header">Experience</td>
                    <td class="col header">Is permanent?</td>
                    
                </tr>  
                    {list(props)}
            </table>
        </div>
    );
 }
export default TeamCpt;