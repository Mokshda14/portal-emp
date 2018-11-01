import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
class List extends Component {
    componentDidMount() {
        let activeId = this.props.atr.activeId
        let selectedIndex = this.props.atr.teamList.findIndex(function(element) {
            return element.empId === activeId;
          });
          if(selectedIndex !== -1 && this.arr[selectedIndex]) {
          ReactDOM.findDOMNode(this.arr[selectedIndex]).scrollIntoView();
          }
    }


    componentDidUpdate() {
        let activeId = this.props.atr.activeId
        let selectedIndex = this.props.atr.teamList.findIndex(function(element) {
            return element.empId === activeId;
          });
          if(selectedIndex !== -1 && this.arr[selectedIndex]) {
          ReactDOM.findDOMNode(this.arr[selectedIndex]).scrollIntoView();
          }
    }


    render() {
    let elem = [];
    this.arr = new Array(this.props.atr.teamList.length);
    if(this.props.atr.isLoading) {
        elem.push(<tr key="234"><td colSpan="5" className="loader"/></tr>)
    } else {
        if(this.props.atr.teamList) {
            this.props.atr.teamList.map((emp, index) => {
                elem.push (
                    <tr id={emp.empId} className={`row ${emp.isActive ? "active" : ""}`} 
                        key={index} ref={(elem)=> {this.arr[index] = elem}}
                        onClick={() => this.props.atr.rowSelected(index, false)}> 
                        <td className="col">{emp.empId}{emp.isActive}</td>
                        <td className="col">{emp.empName}</td>
                        <td className="col">{emp.department}</td>
                        <td className="col">{emp.experience}</td>
                        <td className="col">{emp.isPermanent? 'Yes' : 'No'}</td>
                        <td className={`${emp.isActive  ? "" : "hidden"}`}>
                            <div className="message-container"><div className="arrow"/>
                                <div className="info" onClick={() => this.props.atr.rowSelected(index, true)}>
                                {/* View profile */}
                                    <Link to={"/portal/team/id"+ emp.empId}>View profile</Link>
                                </div>
                            </div>
                        </td>
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
}

    class TeamCpt extends Component {


    render() {
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
                    {/* {list(props)} */}
                    <List atr={this.props} />
                </tbody>
            </table>

             
            
        </div>
    );
}
 }
export default TeamCpt;