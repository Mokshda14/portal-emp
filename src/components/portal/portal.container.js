import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import  Home  from '../home/home.component';
import  Team  from '../team/team.container';
import  Attendance  from '../attendance/attendance.container';
class Portal extends Component {

render() {
  return (
  <div className="App">

      <header>
        <nav>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/attendance'>Attendance</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path='/team' component={Team}/>
        <Route exact path='/attendance' component={Attendance}/>
        <Route exact path='/home' component={Home}/>
      </Switch>
      
    </div>)
}
}

export default Portal;