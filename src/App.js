import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Portal from './components/portal/portal.container';
import Login from './components/login/login.container';
import LoginCpt from './components/login/login.component';
import SignupCpt from './components/login/signup.component';
import './App.css';
class App extends Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Emp Portal</h1>
      </header>

      <Switch>
                    <Route exact path='/' component={LoginCpt}/>
                    <Route exact path='/login' component={LoginCpt}/>
                    <Route exact path='/signup' component={SignupCpt}/>
                    <Route exact path='/portal' component={Portal}/>
      </Switch>
      
    </div>
  );
}
}

export default App
