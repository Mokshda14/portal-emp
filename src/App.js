import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import  Home  from './components/home/home.component';
import  Team  from './components/team/team.container';
import  Attendance  from './components/attendance/attendance.component';
import './App.css';
class App extends Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Emp Portal</h1>
      </header>

      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/attendance'>Attendance</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/team' component={Team}/>
        <Route exact path='/attendance' component={Attendance}/>
      </Switch>
    </div>
  );
}
}

export default App
