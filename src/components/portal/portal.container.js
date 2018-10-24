import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import  Home  from '../home/home.component';
import  Team  from '../team/team.container';
import  Attendance  from '../attendance/attendance.container';
class Portal extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this);
  }

  logout() {
    window.location.replace('/logout'); 
  }

  render() {
  
    return (
      <Router>
        
        <div className="portal">

        <div className="link">
          {/* <Link to='../logout'>Log Out</Link>  */}
          <button name="logout-btn" onClick={this.logout}> Logout </button>
        </div>
              <nav>
                <ul>
                  <li><Link to={'/portal/home'} >Home</Link></li>
                  <li><Link to={'/portal/team'}>Team</Link></li>
                  <li><Link to={'/portal/attendance'}>Attendance</Link></li>
                </ul>
              </nav>

                  <hr />


          
       

              <Route  path="/portal/home" component={Home} />  
              <Route  path='/portal/team' component={Team}/>
              <Route  path='/portal/attendance' component={Attendance}/>
          </div>
          </Router>
      )
    }
  }

export default Portal;
