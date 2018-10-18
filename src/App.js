import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import Portal from './components/portal/portal.container';
import LoginCpt from './components/login/login.component';
import SignupCpt from './components/login/signup.component';
// import Home from './components/home/home.component';
// import  Team  from './components/team/team.container';
// import  Attendance  from './components/attendance/attendance.container';
import './App.css';
class App extends Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Emp Portal</h1>
      </header>


      <Route exact path='/login' component={LoginCpt}/>
      <Route exact path='/signup' component={SignupCpt}/>
      <Route exact path='/portal' component={Portal}/>
      <Route path='/portal/home' component={Portal}/>
      <Route path='/portal/team' component={Portal}/>
      <Route path='/portal/attendance' component={Portal}/>
      <Route exact path='/' component={SignupCpt}/>
    </div>



  );
}
}

export default App
