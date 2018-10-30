import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import Portal from './components/portal/portal.container';
import LoginCpt from './components/login/login.component';
import SignupCpt from './components/login/signup.component';
import LogoutCpt from './components/logout/logout.component';
import {connect} from 'react-redux';
import {checkSession} from './actions/login.action';
import './App.css';

const ValidRoute = (props) => {

      if(props.isValidSession) {
        return (<div>
          <Route exact path='/login' component={LoginCpt}/>
          <Route exact path='/signup' component={SignupCpt}/>
          <Route exact path='/portal' component={Portal}></Route>
          <Route path='/portal/home' component={Portal}/>
          <Route path='/portal/team' component={Portal}/>
          <Route path='/portal/attendance' component={Portal}/>
          <Route exact path='/' component={Portal}/>
          <Route exact path='/logout' component={LogoutCpt}/>
        </div> )
      } else {
        return (<div>
          <Route exact path='/login' component={LoginCpt}/>
          <Route exact path='/signup' component={SignupCpt}/>
          <Route exact path='/logout' component={LogoutCpt}/>
          {/* <Route exact path='/*' component={LoginCpt}/> */}
          <Route default render={()=> <Redirect to='/login' push={false} />}/>
          </div>)
      }


}

class App extends Component {

  componentWillMount() {
    this.props.checkSession();
  }

render() {
  return (
    

    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Emp Portal</h1>
      </header>

      <ValidRoute isValidSession={this.props.session.session_flag}/>

      
    </div>



  );
}
}


const mapDispatchToprops = (dispatch) => ({
    checkSession: () => dispatch(checkSession())
})
const mapStateToProps = (state) => ({
  session: state.session
})


export default connect(
  mapStateToProps, mapDispatchToprops
)(App);

